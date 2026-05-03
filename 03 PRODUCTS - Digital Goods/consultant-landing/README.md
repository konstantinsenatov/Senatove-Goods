# Senatove Consultant Landing

Premium static **HTML / CSS / vanilla JS** template for **independent consultants**, fractional executives, advisors, and expert-led practices. Visual direction: **parchment**, **ink**, **cool blue-gray**, subdued **gold** accents—deliberately distinct from the warm agency template.

## What is included

- `index.html` — full page structure and copy placeholders
- `assets/css/style.css` — palette variables, layout, abstract placeholders
- `assets/js/main.js` — mobile navigation, FAQ accordion, calm scroll reveals
- `assets/images/` — optional folder if you add real portraits or screenshots

No frameworks, bundlers, or npm dependencies.

## Sections & flow

1. Header with primary navigation  
2. **Personal expert hero** — asymmetric layout: narrative left, **profile panel** right (monogram / portrait placeholder, Elena Morgan sample name)  
3. **Diagnosis / positioning** — editorial horizontal rows (not agency-style cards)  
4. **The Clarity Method** — cool-toned framework strip  
5. **Advisory Formats** — three consultant offer cards with CSS-only mockups  
6. **Strategic Work Examples** — alternating image/text rows with abstract “document / path / framework” blocks  
7. **Authority / credentials** split  
8. **Outcomes** — underline-style metric rows  
9. **Core domains** — left-border editorial grid  
10. **Testimonials** — ink-accent quotes  
11. **Engagement options** — three packages  
12. **Booking CTA** — consultation panel  
13. **FAQ** with **+ / −** indicators on each question  
14. **Final CTA** and footer  

## Personal hero & portrait placeholder

- Default name: **Elena Morgan**, title **Independent Strategy Consultant** (edit in `index.html`).
- **Status line:** “Available for selected advisory work” (`.status-badge`).
- **Focus tags:** Positioning, Offers, Growth, Clarity (`.focus-tags`).
- **Monogram:** `.profile-portrait-large` contains `<span>E M</span>` — replace with an `<img>` portrait or new initials.
- Decorative **ring** (`.portrait-ring`) is pure CSS; remove in HTML/CSS if you prefer a simple photo only.

## Editing abstract mockups

| Area | Location in HTML | Notes |
|------|------------------|--------|
| Advisory format cards | `.advisory-format-mock` variants | Document bars, sprint blocks, simple “chart” placeholders |
| Strategic work rows | `.mock-advisory-document`, `.mock-path-diagram`, `.mock-framework-sheet` | Swap for images or trim `<div>` wrappers |
| Credentials / booking | standard panels | Plain text and lists |

All placeholders are **HTML/CSS only**; no external assets required for the default look.

## Editing Advisory Formats

- Section id: `#formats` (nav: “Formats”).
- Each card: `<article class="advisory-format-card">` — update `h3`, `p`, and the `href` on `.format-link`.
- To remove a card, delete the whole `<article>` and adjust the grid in CSS if you want two columns.

## Editing Strategic Work Examples

- Section id: `#work-examples`.
- Rows use `.work-example-row--media-left` or `--media-right` (desktop alternation; mobile stacks text then visual for right variant).
- Replace copy under `.work-example-copy` and lists `.work-mini-list`.
- Replace or remove `.work-example-mock` blocks as needed.

## Color system

Edit **`:root`** at the top of `assets/css/style.css`:

- `--bg` — parchment page  
- `--surface` — paper panels  
- `--surface-muted` — cool section washes  
- `--text` / `--text-muted` — ink tones  
- `--accent` / `--accent-soft` — subdued gold  
- `--border` — editorial dividers  
- `--shadow-sm` / `--shadow-md`  

## FAQ accordion & indicators

- Each question is a `<button class="faq-question">` with `.faq-question-text` and `.faq-toggle-icon` (visual **+** closed, **−** open).
- **Hover** and **`:focus-visible`** styles are in CSS; behavior is toggled in `main.js` via `.open` on `.faq-item` and `aria-expanded`.

## Animations

- Classes: `.reveal`, `.reveal-soft`, `.reveal-line`, `.method-step` — observed once on scroll. **No parallax.**
- Prefer reduced motion: CSS disables transitions when `prefers-reduced-motion: reduce` is set.

## Deployment

Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, Cloudflare Pages). No build step.

## License (placeholder)

Bundled with Senatove Goods commercial terms—replace with your final license before redistribution.
