# Senatove Consultant Landing

## Product / Template Name
`Consultant Landing` is a premium minimal static landing page template from Senatove Service Landing Pack v1.

## Consultant Design Direction
- Authority-first personal expert page
- Calm editorial pacing (not portfolio-driven)
- Method-led conversion flow for advisory offers
- Built for trust-building conversations, not loud promotion

## Who This Is For
- Independent consultants
- B2B advisors
- Business strategists
- Coaches
- Expert personal brands
- Specialists selling calls, sessions, advisory, or strategy packages

## What Is Included
- `consultant-landing/`
  - `index.html`
  - `assets/css/style.css`
  - `assets/js/main.js`
  - `assets/images/` (placeholder folder for visuals)

Built with:
- HTML
- CSS
- Vanilla JavaScript

No frameworks, no build tools, and no dependencies required.

## Page Structure
1. Header
2. Personal Expert Hero (with authority profile panel)
3. Problem / Positioning rows
4. Method
5. Authority / About split section
6. Insight Results
7. Expertise list
8. Testimonials
9. Engagement Options
10. Booking CTA panel
11. FAQ
12. Final CTA
13. Footer

This sequence is built for clarity and conversion. Keep it unless you have a specific reason to change it.

## Authority-First Structure
- Hero combines positioning message + personal authority panel
- Problem rows diagnose buyer hesitation before pitching offers
- The Clarity Method establishes framework credibility
- Authority/Credentials section adds trust before engagement options
- Booking CTA appears after context, not as an aggressive first ask

## Method-Led Conversion Logic
- Visitors first understand the problem
- Then see your framework (`Diagnose -> Position -> Package -> Guide`)
- Then review outcomes and engagement levels
- Then move to consultation request with higher intent

## How To Edit Copy
1. Open `index.html`.
2. Update headlines, profile text, outcomes, engagement details, testimonials, and button labels.
3. Keep section IDs (for example `#expertise`, `#method`, `#results`, `#engagement`, `#faq`) if you want navigation links to keep working.
4. Keep CTA labels action-focused (for example: "Book a Call", "Get Proposal", "Schedule Session").

## Personal Hero & Authority Panel
- Consultant name placeholder: `Elena Morgan`
- Role/title placeholder: `Independent Strategy Consultant`
- Status badge and credibility bullets are inside `.profile-panel`
- Profile initials block uses `.profile-portrait` and can be replaced with a real portrait image if needed
- Additional advisory line is in `.profile-note`

## How To Edit Colors
1. Open `assets/css/style.css`.
2. Edit the `:root` variables at the top.
3. Most-used color tokens:
   - `--bg`
   - `--surface`
   - `--surface-muted`
   - `--text`
   - `--text-muted`
   - `--border`
   - `--accent`

These variables control the overall visual style quickly.

## How To Edit Spacing / Layout
- Section vertical spacing: `.section`
- Main page width: `--container`
- Hero layout: `.consultant-hero-grid`
- Problem rows: `.problem-rows` and `.problem-row`
- Method layout: `.method-framework` and `.method-stage`
- Engagement options layout: `.engagement-layout`
- Card and panel corner style: `--radius-sm`, `--radius-md`, `--radius-lg`

## How To Edit Credentials
- Credentials list is in `.credentials-panel ul`
- Keep each point short and proof-based (sessions, years, scope, process)
- Keep 3-5 items for readability

## How To Edit The Clarity Method
- Method block is in `.method-framework`
- Each stage uses `.method-stage` and `.method-step`
- Recommended structure per stage:
  - number
  - stage name
  - one concise explanation line
- Keep wording strategic and specific

## How To Edit Engagement Options
- Engagement cards are in `.engagement-layout`
- Update names, pricing labels, bullets, and CTA copy
- Keep one featured card with `.engagement-card.featured` for primary offer

## How To Replace Placeholders
1. Add your images to `assets/images/`.
2. Replace initials in `.profile-portrait` with your own initials or image.
3. If needed, add portrait or supporting visuals with descriptive `alt` text.

## How The JavaScript Works
`assets/js/main.js` includes:
- Mobile menu open/close toggle
- Auto-close mobile menu on nav link click
- Close mobile menu on `Esc`
- FAQ accordion open/close behavior
- IntersectionObserver reveal system for calm section entrances
- Sequential reveal for `.method-step` stages

## Animation System
- Reveal classes:
  - `.reveal`
  - `.reveal-soft`
  - `.reveal-line`
  - `.method-step`
- Active visibility class: `.is-visible`
- Motion style is intentionally calm and slower than agency templates
- No parallax and no continuous animations

## How To Reduce / Disable Motion
- Built-in support for `prefers-reduced-motion: reduce` is included in CSS.
- In reduced motion mode:
  - transitions/animations are disabled
  - reveal elements stay fully visible
  - scroll behavior falls back to static
- You can also remove reveal classes from HTML for a fully static presentation.

## Quick Customization Checklist
- Replace brand name (`Senatove Consultant`) in header/footer
- Update personal hero headline, profile panel, and credibility bullets
- Edit problem rows to match your audience objections
- Update Clarity Method stage descriptions
- Adjust authority credentials to real proof points
- Replace outcomes and metrics in Insight Results
- Update engagement names, prices, and scope
- Keep the booking CTA focused on one clear next action
- Connect CTA links to your booking flow or contact form
- Replace footer social/contact links with real URLs

## Basic License (Placeholder)
This template is part of a paid digital product by Senatove Goods.  
Replace this section with your final commercial license terms before distribution.
