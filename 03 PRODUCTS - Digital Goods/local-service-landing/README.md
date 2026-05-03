# Senatove Local Service Landing

## Product / Template Name
`Local Service Landing` is a premium practical landing page template from Senatove Service Landing Pack v1.

## Local-Service Design Direction
- Practical call/quote-first landing flow
- Trust-forward section rhythm for local customers
- Service clarity before contact request
- Mobile-friendly action design for quick booking behavior

## Who This Is For
- Cleaning companies
- Repair services
- Moving companies
- Local clinics
- Home service providers
- Legal offices
- Local studios
- Small local businesses

## What Is Included
- `local-service-landing/`
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
2. Hero with quote/contact panel
3. Trust strip
4. Services
5. Why Choose Us
6. Service Areas
7. Results
8. Process
9. Reviews
10. Pricing
11. FAQ
12. Final quote/contact section
13. Footer
14. Sticky mobile CTA

## Call/Quote-First Conversion Flow
- Hero introduces value and presents a visible quote request panel immediately
- Trust strip validates reliability right after hero
- Services, areas, reviews, and pricing reduce friction before contact
- Final contact panel acts as a strong conversion close with clear response-time expectations

## How To Edit Copy
1. Open `index.html`.
2. Update all headings, section text, CTA labels, and review quotes.
3. Keep section IDs (`#services`, `#areas`, `#reviews`, `#pricing`, `#faq`, `#contact`) if you want navigation links to keep working.

## How To Edit Services
- In `index.html`, update the cards inside `.service-grid`.
- Keep titles short and practical so customers can scan quickly.
- Keep each card focused on one concrete customer need.

## How To Edit Service Areas
- Update the list items inside `.areas-list`.
- Replace area names with your real neighborhoods, cities, or regions.
- If needed, split areas into zones (for example: North, Central, South clusters).

## How To Edit Pricing
- Update blocks in `.pricing-grid`.
- Edit plan names, price labels, included items, and CTA button text.
- Keep one featured option by using `.price-card.featured` for your most-requested service.
- Keep pricing copy practical and quote-friendly, not enterprise or agency-style.

## How To Edit Contact Details
- Update phone, email, and response time inside `.contact-panel`.
- Update `tel:#` in the sticky mobile CTA to a real phone link (example: `tel:+15551234567`).

## How To Connect The Placeholder Form
- The hero quote panel is visual-only by default.
- Replace placeholder fields with real `<input>` elements if needed.
- Connect to your backend, form tool, or automation provider.
- The note under the panel explains that this is a front-end placeholder.
- No backend logic is included in this template by default.

## How The Sticky Mobile CTA Works
- The sticky bar is `.mobile-cta`.
- It appears on mobile/tablet and is hidden on desktop.
- Buttons:
  - `Call` (`tel:#` placeholder)
  - `Get Quote` (`#contact`)
- Add real phone links and verify that the bar does not overlap key mobile content.

## Animation System
- Reveal classes:
  - `.reveal`
  - `.reveal-quick`
  - `.reveal-panel`
  - `.trust-item`
- Active class: `.is-visible`
- Motion style is short and practical (faster than consultant, less cinematic than agency).
- Includes quick hero panel reveal, trust strip reveal, and section-by-section entrance.
- No parallax and no continuous decorative animation.

## How To Reduce / Disable Animations
- CSS includes `prefers-reduced-motion: reduce` support.
- In reduced motion mode:
  - transitions/animations are disabled
  - reveal elements remain fully visible
  - smooth scrolling is disabled
- You can also remove reveal classes from HTML for a static presentation.

## How The JavaScript Works
`assets/js/main.js` includes:
- Mobile menu open/close toggle
- Auto-close menu when nav links are clicked
- Close menu on `Esc`
- FAQ accordion open/close
- IntersectionObserver reveal handling
- Safe fallback: if observer is unavailable, all reveal elements stay visible
- Optional minimal sticky CTA shadow state on scroll

## Quick Customization Checklist
- Replace brand name (`Senatove Local`) in header/footer
- Update services to match your exact business type
- Replace service areas with real local coverage
- Add real customer reviews and names
- Update pricing and featured offer
- Replace quote panel placeholders with real form fields (optional)
- Add real phone/email and update `tel:` link
- Connect CTA buttons to your quote flow
- Test sticky mobile CTA on real device widths before shipping

## Basic License (Placeholder)
This template is part of a paid digital product by Senatove Goods.  
Replace this section with your final commercial license terms before distribution.
