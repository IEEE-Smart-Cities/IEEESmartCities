# IEEE Smart Cities Dallas — Website

Static site (plain HTML/CSS/JS, no build step). Built from
`IEEE_Smart_Cities_Dallas_Website_Developer_Notes.md`.

## Run locally

Open `index.html` directly in a browser, or serve the folder so relative
paths behave the same as production:

```
cd site
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html`, `about.html`, `tracks.html`, `call-for-speakers.html`,
  `contact.html` — Phase 1 pages.
- `agenda.html`, `speakers.html`, `sponsors.html`, `registration.html` —
  Phase 2/3 pages, currently "coming soon" / high-level placeholders.
- `css/style.css` — single shared stylesheet (colors, layout, components).
- `js/main.js` — mobile nav toggle, active-link highlighting, and
  front-end-only form confirmation messages.

Each page is self-contained HTML (nav + footer duplicated per page) so any
committee member can edit text directly without a build process.

## Before launch — things to connect

1. **Speaker proposal form** (`call-for-speakers.html#submit`) and
   **Interest list** / **Contact** forms currently only show an in-browser
   confirmation message — they don't send data anywhere. Wire them to one
   of:
   - A Google Form / Microsoft Form (either embed as an `<iframe>`, or
     point users to it and drop the HTML form), or
   - A form backend (Formspree, etc.) or custom endpoint, with the
     `action` attribute set and responses exported to Excel/CSV.
   See the `DEVELOPER NOTE` comments in each page's `<form>` block.
2. Replace the placeholder contact email in `contact.html`.
3. Confirm date/venue (currently "Nov 21, 2026, Collin College – Plano
   Campus Conference Center, Plano, TX" per conference record #72378) —
   update `index.html`, `about.html`, and `contact.html` if it changes.
4. Add real sponsor logos, speaker cards, and agenda once available
   (placeholders are marked with `DEVELOPER NOTE` comments in
   `speakers.html` and `sponsors.html`).
5. Add a favicon / logo image in `assets/` and reference it in each
   page's `<head>` (currently using a text "SC" mark in the nav).

## Editing content

All copy lives directly in the HTML files — search for the text you want
to change and edit it in place. Shared elements (nav, footer, colors,
spacing) are controlled from `css/style.css`.
