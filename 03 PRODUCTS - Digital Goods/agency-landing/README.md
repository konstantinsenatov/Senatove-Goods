# Senatove Agency Landing

## What this is

This is a **static HTML/CSS/JavaScript landing page template** for digital agencies, creative studios, freelancers, and service-based teams. You edit files directly and upload them to hosting—no build step.

**This is not** a WordPress theme.  
**This is not** a no-code builder page.  
**This is not** a plugin.

**Basic HTML and CSS knowledge is recommended** so you can swap copy, colors, links, and sections confidently.

## What is included

| Item | Notes |
|------|--------|
| `index.html` | Full page markup and text |
| `assets/css/style.css` | All styling; palette uses CSS variables at the top |
| `assets/js/main.js` | Mobile nav, FAQ accordion, scroll reveal, optional soft parallax |
| `assets/images/` | Empty folder—add your own images if you use `<img>` tags |
| Responsive layout | Mobile, tablet, and desktop breakpoints |
| Mobile navigation | Hamburger menu on small screens |
| FAQ accordion | Expand/collapse questions |
| Reveal animations | Optional fade/slide-in on scroll (vanilla JS + CSS) |
| Abstract HTML/CSS project mockups | Decorative placeholders in the hero and portfolio—not broken images |

There are **no npm packages, no bundler, and no frameworks**.

## Quick start

1. Open `index.html` in your browser (double-click or use a local preview).
2. Edit visible text directly in `index.html`.
3. Adjust colors in `assets/css/style.css` (see the `:root` variables).
4. Replace project names, pricing numbers, FAQ answers, and **CTA `href` values** with your links or anchors.
5. Either **keep** the abstract HTML/CSS mockups, **customize** their markup/CSS, or **replace** them with real screenshots.
6. Upload the entire folder to your web host (see **How to deploy**).

## Recommended editing order

1. Logo / brand name (header and footer)
2. Hero headline and paragraphs
3. CTA links (`href` on buttons and main nav)
4. Services / capabilities
5. Featured work / case studies
6. Process
7. Benefits
8. Testimonials
9. Pricing
10. FAQ
11. Footer links and social URLs

## How to edit text

Almost all visible copy lives in **`index.html`**. Search for headings (`<h1>`, `<h2>`, `<h3>`), paragraphs (`<p>`), list items, and button labels.  

Keep section **`id` attributes** (for example `id="services"`, `id="work"`, `id="pricing"`, `id="contact"`) if you want in-page navigation (`#services`, etc.) to keep working.

## How to edit colors

Colors are controlled by **CSS variables** in the `:root { ... }` block at the **top** of `assets/css/style.css`.

Examples:

- `--bg` — page background  
- `--surface` — cards and panels  
- `--text` — main text  
- `--accent` — buttons and emphasis  
- `--border` — outlines and dividers  

Change a variable once and it propagates across the template.

## How to edit project visuals

Current portfolio and hero visuals are **abstract HTML/CSS mockups** (shapes, faux browser chrome, lines)—not photographs or missing assets.

You can:

- Leave them as styled placeholders  
- Edit the HTML structure and CSS classes inside `.studio-board`, `.case-visual`, and `.case-mock`  
- Replace a mockup block with `<img src="assets/images/..." alt="...">`  
- Remove a mockup section if you do not need it  

## How to update CTA links

Every button and nav link uses a normal anchor: `<a href="...">`.

- **Same-page sections:** use hash links that match section IDs, for example:
  - `#services` — Capabilities  
  - `#work` — Featured Work  
  - `#process` — Process  
  - `#pricing` — Pricing  
  - `#faq` — FAQ  
  - `#contact` — Final CTA / contact block  
- **External pages:** use full URLs, for example `href="https://example.com/contact"`  
- **Email:** `href="mailto:you@example.com"`  
- **Phone:** `href="tel:+1234567890"`  

Update both the **header nav**, **footer links**, and **button** `href` values wherever visitors should go.

## Important note about forms / contact

**This template does not include server-side form processing.** All buttons and “contact” actions are **static front-end links**—they scroll, open mail clients, or go to URLs you set.

To collect form submissions you must connect:

- A hosted form service (examples: **Formspree**, **Getform**, **Netlify Forms**), or  
- Your own **backend** or **API**, or  
- A **CMS** that serves forms, or  
- If you later embed this HTML inside **WordPress**, a **form plugin** there  

Those names are **examples only**—they are not bundled or required by this template.

## Animations and interactions (v1.1)

**No external animation libraries** (no GSAP, no Swiper, no Lottie). Motion is **progressive enhancement**: the page is readable with JavaScript off; without `IntersectionObserver`, all reveals are shown.

- **Scroll reveal:** `.reveal`, `.reveal-up`, `.reveal-scale`, `.reveal-soft` start hidden only when `html.js-enhanced` is set. `main.js` adds `.is-visible` as blocks enter the viewport.
- **Staggered cards:** parent `.stagger` applies a short increasing delay to child reveal elements (capabilities, work grid, process, benefits, pricing, etc.).
- **Hover micro-interactions:** buttons, capability cards, work cases, price cards, and FAQ rows use subtle `translateY` and shadow (see `style.css`).
- **Marquee strip:** the horizontal capability band after the hero is **pure CSS** (`@keyframes`). Hover pauses the motion.
- **Soft parallax:** `.parallax-soft` on the studio board uses a light scroll-linked shift in JS—skip by removing the class or disabling JS motion block.
- **Mobile menu & FAQ:** toggled in `assets/js/main.js` only (`aria-expanded` kept in sync).

Smooth anchor scrolling uses `scroll-behavior: smooth` on `html` and is turned off when the user prefers reduced motion.

## How to disable animations

1. **HTML:** Remove `reveal`, `reveal-up`, `reveal-scale`, `reveal-soft`, `stagger` (from parents), `parallax-soft`, and/or delete the **marquee** `<section class="marquee-section...">` block.
2. **JavaScript:** Comment out the `js-enhanced` + `IntersectionObserver` (and optional parallax) block in `assets/js/main.js`.
3. **Marquee only:** Remove the marquee section from `index.html` or remove the `@keyframes` / `.marquee-track` rules in `style.css`.
4. **System preference:** `prefers-reduced-motion: reduce` already disables transitions, scroll smooth, and marquee/reveal motion in CSS.

## How to deploy

This is a **static site**: upload the folder as-is.

Common options:

- **Any shared hosting** — FTP or file manager (cPanel, Plesk, etc.)  
- **Netlify** or **Vercel** — drag-and-drop the folder or connect a Git repo  
- **GitHub Pages** — publish the `demo/agency-landing` folder or your fork’s equivalent path  
- **Cloudflare Pages** — similar to Netlify/Vercel  

No build command is required—your host only needs to serve `index.html` and the `assets/` folder.

## Before publishing checklist

- [ ] Replace logo / brand text  
- [ ] Update hero copy  
- [ ] Update all CTA and nav `href` values  
- [ ] Update services / capabilities  
- [ ] Update case studies and metrics  
- [ ] Update pricing  
- [ ] Update testimonials  
- [ ] Update FAQ  
- [ ] Update footer and social links  
- [ ] Replace or adjust abstract mockups if needed  
- [ ] Wire contact/actions to a real form or URL if you collect leads  
- [ ] Test the mobile menu  
- [ ] Test the FAQ accordion  
- [ ] Test on a phone and on desktop  

## Support note

Support covers **issues with the product files** as shipped. **Customization help, hosting setup, backend integrations, and third-party form configuration are not included.**

## License placeholder

Commercial use is allowed **according to the license terms** bundled with your Senatove Goods purchase. **Reselling, redistributing, or repackaging this template as your own digital product is not allowed.** Replace this paragraph with your final license text if you distribute derivative work under different terms.
