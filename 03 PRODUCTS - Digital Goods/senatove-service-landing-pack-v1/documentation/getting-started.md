# Getting Started

This guide helps buyers open the pack quickly and start editing without a build step.

## Open a template

1. Unzip the product package if you received it as an archive.
2. Open one of these folders:
   - `agency-landing/`
   - `consultant-landing/`
   - `local-service-landing/`
3. Open **`index.html`** in your browser:
   - **Double-click** the file, or  
   - Use your code editor’s **Live Preview** / **Simple HTTP server** if you prefer (helps with some browser security rules).

## Preview locally

- **Direct open:** works for reading layout and most static behavior.
- **Local server:** use any static server you like (editor extension, `python -m http.server`, etc.) for a closer match to production URLs.

## Files to edit first

| File | Purpose |
|------|--------|
| `index.html` | Headlines, paragraphs, buttons, section order (careful), links |
| `assets/css/style.css` | Colors (`:root` variables), spacing, typography |
| `assets/js/main.js` | Mobile menu, FAQ, scroll effects (only if you need changes) |

## Suggested editing order

1. Replace **brand name** and **contact** (phone, email, social placeholders).
2. Update **hero** and primary **CTAs**.
3. Update **services / offers**, **pricing**, and **proof** (reviews, logos, metrics).
4. Adjust **CSS variables** for your brand colors.
5. Add real **`tel:`** and **`mailto:`** links (and wire **forms** if you use them).

## Keep a backup

Copy the whole template folder before heavy edits (for example `agency-landing-copy/`) so you can compare against the original structure.

## Next steps

Read **`customization.md`** for CSS variables, forms, animations, and deployment tips.
