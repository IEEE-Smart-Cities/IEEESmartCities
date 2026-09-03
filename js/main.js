// IEEE Smart Cities Dallas — shared site behavior
// Reads every configurable value from js/config.js (loaded first on each page).

(function () {
  'use strict';

  var CFG = window.SC_CONFIG || {};
  var EMAIL = CFG.email || '';
  var SESSIONIZE = (CFG.sessionizeUrl || '').trim();
  var D = CFG.dates || {};

  function on(iso) { return iso ? new Date(iso) : null; }

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------------------
       Mobile nav toggle
       --------------------------------------------------------- */
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      function closeMenu(returnFocus) {
        if (!links.classList.contains('open')) return;
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        if (returnFocus) toggle.focus();
      }

      toggle.addEventListener('click', function () {
        var isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      // Close the menu when a link is chosen, so same-page anchors don't
      // leave the panel covering the content on mobile.
      links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && links.classList.contains('open')) {
          closeMenu(false);
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu(true);
      });

      document.addEventListener('click', function (e) {
        if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu(false);
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 880) closeMenu(false);
      });
    }

    /* ---------------------------------------------------------
       Active nav link
       --------------------------------------------------------- */
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a:not([data-sessionize])').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('#')[0];
      if (href === current) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });

    /* ---------------------------------------------------------
       Footer year
       --------------------------------------------------------- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------------------------------------------------------
       Official shared email — published in one place, injected
       everywhere it appears.
       --------------------------------------------------------- */
    if (EMAIL) {
      document.querySelectorAll('[data-email]').forEach(function (el) {
        var subject = el.getAttribute('data-email-subject');
        el.setAttribute('href', 'mailto:' + EMAIL + (subject ? '?subject=' + encodeURIComponent(subject) : ''));
        if (el.hasAttribute('data-email-text') || !el.textContent.trim()) {
          el.textContent = EMAIL;
        }
      });
      document.querySelectorAll('[data-email-plain]').forEach(function (el) {
        el.textContent = EMAIL;
      });
    }

    /* ---------------------------------------------------------
       Sessionize buttons
       ---------------------------------------------------------
       Configured  → every button points at the live Sessionize
                     Call for Speakers page.
       Not set yet → buttons fall back to their href (the Call for
                     Speakers page), and the submit block on that
                     page shows the "link coming shortly" notice
                     instead of a button that goes nowhere.
       --------------------------------------------------------- */
    var sessionizeBtns = document.querySelectorAll('[data-sessionize]');

    if (SESSIONIZE) {
      sessionizeBtns.forEach(function (a) {
        a.setAttribute('href', SESSIONIZE);
        a.removeAttribute('target');
        a.removeAttribute('rel');
      });
      document.querySelectorAll('[data-sessionize-pending]').forEach(function (el) {
        el.hidden = true;
      });
    } else {
      document.querySelectorAll('[data-sessionize-ready]').forEach(function (el) {
        el.hidden = true;
      });
      // Every other Sessionize button keeps its href and lands on the
      // Call for Speakers submit block, which explains the situation.
      // The button inside that block has nowhere further to send people,
      // so it becomes a direct request for the submission link.
      document.querySelectorAll('[data-sessionize-primary]').forEach(function (a) {
        a.classList.add('is-pending');
        if (EMAIL) {
          a.setAttribute('href', 'mailto:' + EMAIL +
            '?subject=' + encodeURIComponent('Request: speaker proposal submission link'));
          a.textContent = 'Email us for the submission link';
        } else {
          a.setAttribute('aria-disabled', 'true');
        }
      });
    }

    /* ---------------------------------------------------------
       Sitewide banner
       ---------------------------------------------------------
       Rolls over on its own at each published milestone, so the
       banner never advertises a deadline that has passed.
       --------------------------------------------------------- */
    var banner = document.querySelector('[data-status-banner]');
    if (banner) {
      var now = new Date();
      var phases = [
        { until: on(D.cfsOpens), cls: '', text:
            'Call for Speakers opens Tuesday, August 25, 2026. In-person event: Saturday, November 21, 2026.',
          cta: 'Read the Call for Speakers', href: 'call-for-speakers.html' },

        { until: on(D.finalDeadline), cls: 'is-open', text:
            'Call for Speakers is open — proposals due Wednesday, September 30, 2026, 11:59 PM CT.',
          cta: 'Submit a proposal', href: 'call-for-speakers.html' },

        { until: on(D.notifications), cls: 'is-review', text:
            'Speaker proposals are now under review. Notifications go out Monday, October 12, 2026.',
          cta: 'See the important dates', href: 'call-for-speakers.html#dates' },

        { until: on(D.lineupPublished), cls: 'is-review', text:
            'Speaker notifications are in progress. Preliminary lineup publishes Monday, October 26, 2026.',
          cta: 'See the important dates', href: 'call-for-speakers.html#dates' },

        { until: on(D.agendaPublished), cls: 'is-open', text:
            'Preliminary speaker lineup is published. Final public agenda publishes Friday, November 13, 2026.',
          cta: 'View speakers', href: 'speakers.html' },

        { until: on(D.eventDay), cls: 'is-open', text:
            'Final agenda is published. IEEE Smart Cities Dallas is Saturday, November 21, 2026 — in person in Plano.',
          cta: 'View the agenda', href: 'agenda.html' },

        { until: null, cls: 'is-open', text:
            'IEEE Smart Cities Dallas — Saturday, November 21, 2026. Thank you to our speakers and attendees.',
          cta: 'View the agenda', href: 'agenda.html' }
      ];

      var phase = phases[phases.length - 1];
      for (var i = 0; i < phases.length; i++) {
        if (phases[i].until && now < phases[i].until) { phase = phases[i]; break; }
      }

      var textEl = banner.querySelector('[data-status-text]');
      var linkEl = banner.querySelector('[data-status-link]');
      if (textEl) textEl.textContent = phase.text;
      if (linkEl) {
        // Don't link the banner to the page the visitor is already reading.
        if (phase.href.split('#')[0] === current) {
          linkEl.hidden = true;
        } else {
          linkEl.hidden = false;
          linkEl.textContent = phase.cta + ' →';
          linkEl.setAttribute('href', phase.href);
        }
      }
      if (phase.cls) banner.classList.add(phase.cls);
    }

    /* ---------------------------------------------------------
       Draft notice (footer only) — see config.draftNotice
       --------------------------------------------------------- */
    if (CFG.draftNotice === false) {
      document.querySelectorAll('[data-draft-notice]').forEach(function (el) {
        el.hidden = true;
      });
    }

  });
}());
