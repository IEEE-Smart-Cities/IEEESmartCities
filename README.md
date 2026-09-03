# IEEE Smart Cities Dallas — Website

Static site (plain HTML/CSS/JS, no build step). Built from
`IEEE_Smart_Cities_Dallas_Website_Developer_Notes.md`.

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
- `sponsors.html` — technical sponsorship acknowledgement retained for
  existing inbound links; it is not included in the primary navigation.
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
3. Confirm date/venue (currently "Nov 21, 2026, Collin College – Plano
   Campus Conference Center, Plano, TX" per conference record #72378) —
   update `index.html`, `about.html`, and `contact.html` if it changes.
4. Add confirmed speaker cards and the final agenda once available
   (placeholders are marked with `DEVELOPER NOTE` comments in
   `speakers.html` and `agenda.html`).
5. The IEEE Smart Cities logo and social-sharing image live in `assets/`.

## Editing content

All copy lives directly in the HTML files — search for the text you want
to change and edit it in place. Shared elements (nav, footer, colors,
spacing) are controlled from `css/style.css`.
