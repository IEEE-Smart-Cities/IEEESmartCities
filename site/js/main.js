// IEEE Smart Cities Dallas — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Highlight the active nav link based on current page
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Generic front-end form handling (Contact + Interest List).
  // NOTE FOR DEVELOPER: these forms currently only show a confirmation
  // message in the browser — they do not send data anywhere yet.
  // Connect the <form data-form> elements below to a real endpoint
  // (e.g. a Google Form action URL, Formspree, or a custom backend)
  // before launch. See README.md for details.
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successBox = form.parentElement.querySelector('.form-success');
      if (successBox) {
        successBox.classList.add('show');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });
});
