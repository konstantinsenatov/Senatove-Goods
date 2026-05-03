# Customization Guide

## Edit Text
- Open `index.html`.
- Replace headings, paragraphs, button labels, and section copy.
- Keep section IDs if your navigation links use them.

## Edit Colors (CSS Variables)
- Open `assets/css/style.css`.
- Update variables inside the `:root` block (for example: `--bg`, `--surface`, `--text`, `--accent`, `--border`).

## Edit Buttons and Links
- Update button text directly in `index.html`.
- Update `href` values for:
  - section anchors (`#services`, `#contact`, etc.)
  - phone links (`tel:`)
  - email links (`mailto:`)
  - external pages

## Replace Placeholder Images
- Add your files into `assets/images/`.
- Replace placeholder blocks or image references in `index.html`.
- Use meaningful `alt` text.

## Edit Sections
- Duplicate, remove, or reorder existing sections in `index.html`.
- Keep class names when possible for cleaner styling reuse.
- If you change structure significantly, verify mobile/tablet layouts.

## Disable Animations
- In `assets/css/style.css`, remove reveal/transition styles if needed.
- Templates include `prefers-reduced-motion` support by default for accessibility.

## Connect Placeholder Forms
- Included quote/form fields are front-end placeholders.
- To collect submissions, connect to:
  - your backend endpoint
  - a form provider
  - a CMS form handler
- No backend processing is included in this pack by default.
