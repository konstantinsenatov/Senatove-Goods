# Senatove Service Landing Pack v1

## Template Included
- `agency-landing/`
  - `index.html`
  - `assets/css/style.css`
  - `assets/js/main.js`
  - `assets/images/` (placeholder folder for your visuals)

## About This Template
`Agency Landing` is a premium minimal static landing page for digital agencies, creative studios, consultants, and service businesses.

Design direction:
- Portfolio-first creative agency layout
- Editorial section rhythm with stronger asymmetry
- Case-study emphasis with larger project presence
- Calm premium visuals for strategy/design/web/growth studios

Built with:
- HTML
- CSS
- Vanilla JavaScript

No frameworks, no build tools, and no dependencies required.

## Who This Is For
- Digital agencies
- Creative studios
- Freelance consultants
- Service businesses that need a focused landing page

## Page Structure (Section Order)
The template follows a practical conversion flow:
1. Hero
2. Capabilities
3. Featured Work (portfolio emphasis)
4. Studio Workflow
5. Benefits
6. Testimonials
7. Studio Pricing
8. FAQ
9. Final CTA

This order is intentional. Keep it unless you have a strong reason to change it.

## How To Edit Text
1. Open `index.html` in any code editor.
2. Replace headings, paragraphs, button labels, and section copy with your own content.
3. Keep section IDs (for example `#services`, `#pricing`) if you want navigation links to keep working.
4. Keep the CTA labels action-focused (for example: "Book Call", "Start Project", "Get Proposal").

## How To Edit Colors
1. Open `assets/css/style.css`.
2. Go to the `:root` block at the top.
3. Update color variables such as:
   - `--bg`
   - `--surface`
   - `--text`
   - `--border`
   - `--accent`

These variables control the full visual system.

## How To Edit Spacing / Layout
- Section spacing: `.section`
- Main container width: `--container`
- Hero layout: `.hero-grid` and `.studio-board`
- Capabilities layout: `.capability-grid`
- Featured work layout: `.work-layout` and `.work-case`
- Process layout: `.workflow-line` and `.workflow-step`

## Portfolio-First Rhythm Notes
- `#work` is intentionally the most visually dominant section after hero.
- One primary case (`.case-primary`) is larger than supporting cases.
- Keep project headlines concise and show one clear metric per case.
- Preserve visual hierarchy: Hero -> Work -> Process -> Pricing.

## How To Replace Images / Placeholders
1. Add your image files to `assets/images/`.
2. In `index.html`, replace placeholder visual blocks (`.case-visual`, board placeholders in `.studio-board`) with real visuals or refined mockups.
3. Use descriptive `alt` text for accessibility.

## How To Edit Metrics
- Hero board metrics: `.board-metric-row`
- Case metrics: `strong` elements inside `.work-case`
- Keep metric labels short (for example: `+38% lead quality`, `2.4x inquiries`)

## How To Open The Template
- Option 1: Open `index.html` directly in your browser.
- Option 2: Use a local server extension in your editor for live preview.

## JavaScript Features
`assets/js/main.js` includes:
- Mobile menu toggle
- Auto-close mobile menu on nav link click
- Close mobile menu on `Esc`
- FAQ accordion toggle
- Scroll reveal animation with `IntersectionObserver`
- Stagger reveal support for grouped items
- Soft parallax movement for selected visual placeholders

## Animation System
- Reveal classes: `.reveal`, `.reveal-up`, `.reveal-scale`
- Visibility class added by JS: `.is-visible`
- Stagger container class: `.stagger`
- Optional soft movement class: `.parallax-soft`
- Progressive enhancement: content remains visible if JS is unavailable

## Reduce / Disable Motion
- Built-in support for `prefers-reduced-motion: reduce` is included in `assets/css/style.css`.
- In reduced motion mode:
  - animations/transitions are disabled
  - reveal elements stay visible
  - smooth scroll behavior is disabled
- You can also remove reveal/parallax classes from HTML if you want a fully static feel.

## Quick Customization Checklist
- Replace brand name (`Senatove Agency`) in header and footer
- Update hero headline, CTA labels, and studio board content
- Replace featured project visuals and case metrics
- Adjust capability names to your agency/studio services
- Update pricing package names and positioning
- Replace footer social links with real profile URLs

## License (Placeholder)
This template is part of a paid digital product by Senatove Goods.  
Replace this section with your final commercial license terms before distribution.
