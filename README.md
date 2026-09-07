# 2026 IEEE Smart City USA Conference — Website

Static site (plain HTML/CSS/JS, no build step). Built from
the event website developer notes.

## Run locally

Open `index.html` directly in a browser, or serve the folder so relative
paths behave the same as production:

Serve the project root with any static web server, then visit its local URL.
The site files live in the project root; the `site/` folder is not used.

## Structure

- `index.html`, `about.html`, `program-committee.html`, `tracks.html`,
  `call-for-speakers.html`, `contact.html` — main event pages.
- `agenda.html`, `speakers.html`, `registration.html` — Phase 2/3 pages,
  currently "coming soon" / high-level placeholders.
- `sponsors.html` — IEEE Smart Cities sponsorship acknowledgement retained for
  existing inbound links and linked from the sitewide footer.
- `css/style.css` — single shared stylesheet (colors, layout, components).
- `js/main.js` — mobile navigation, active-link highlighting, shared email
  links, status messaging, and Sessionize link handling.

Each page is self-contained HTML (nav + footer duplicated per page) so any
committee member can edit text directly without a build process.

## Before launch — things to connect

1. Registration updates and general questions currently use direct email links.
   Add an approved registration or contact platform if direct submission is
   required later.
2. Update the shared contact email in `js/config.js` when a replacement
   address is approved.
3. Confirm any venue changes with Collin College. The published venue is
   Collin College – Wylie Campus Conference Center, 391 Country Club Rd,
   Wylie, TX 75098.
4. Add confirmed speaker cards and the final agenda once available
   (placeholders are marked with `DEVELOPER NOTE` comments in
   `speakers.html` and `agenda.html`).
5. Approved IEEE and IEEE Smart Cities brand assets live in `assets/`. The 2x
   IEEE Smart Cities logo is sourced from the official IEEE Education Week partner page:
   `https://educationweek.ieee.org/wp-content/uploads/partner-logo-smart-cities2x.png`.

## Production administration

- Keep `ieeesmartcityconference.org` on auto-renew and complete IEEE domain ownership
  transfer or obtain written approval from the IEEE Experience Design Team.
- Keep the Sessionize event name, website, hybrid Wylie location, proposal formats,
  milestone dates, travel policy, and six-track list synchronized with this site.
- Record written consent before publishing committee members, titles, affiliations,
  photographs, contact details, or biographies.
- If repository visibility changes, verify that the organization plan continues to
  support GitHub Pages before making the repository private.

## Editing content

All copy lives directly in the HTML files — search for the text you want
to change and edit it in place. Shared elements (nav, footer, colors,
spacing) are controlled from `css/style.css`.
