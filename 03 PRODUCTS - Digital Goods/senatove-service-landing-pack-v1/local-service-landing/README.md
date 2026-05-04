# Senatove Local Service Landing

## What this template is

**Local Service Landing** is a single-page marketing layout for trades, cleaning, repairs, and other **local service businesses**. It ships as plain **HTML, CSS, and vanilla JavaScript**—no build step, no package manager, no frameworks.

- **This is static HTML/CSS/JS** you edit in a code editor and host on any static host (or your own server).
- **This is not a WordPress theme** and does not install into WP out of the box.
- **This is not a no-code builder**—you change copy and structure by editing files.
- **Basic HTML/CSS familiarity is recommended** so you can swap sections, links, and styling safely.

## What is included

- `index.html` — page structure and copy placeholders
- `assets/css/style.css` — all layout and visual styling
- `assets/js/main.js` — mobile menu, FAQ accordion, optional scroll reveals, sticky CTA hint
- `assets/images/` — add your own images here if needed (folder may be created by you)

**No npm, no external libraries, no CDN dependencies.** Everything works offline after download.

---

## How to edit key content

### Services

1. Open `index.html`.
2. Find **`<!-- Services`** and the `.service-grid` block.
3. Each **`.service-card`** has a letter **`.service-marker`** (purely visual—you can change `H`, `R`, etc., or restyle in CSS).
4. Update **title** (`<h3>`), **description** (`<p>`), and **`.service-tag`** (the small line under each card).

### Service areas

1. Find **`<!-- Service Areas`** and `.areas-list`.
2. Replace each `<li>` with your real neighborhoods, postal areas, or cities.
3. You can add or remove `<li>` items; the grid will reflow.

### Pricing

1. Find **`<!-- Pricing`** and `.pricing-grid`.
2. Edit plan titles, `.price`, bullet `<li>` items, and button labels.
3. The highlighted plan uses **`.price-card.featured`**—keep that class on the package you want to emphasize.

### Contact details

1. **Hero** quote block and **Final Contact** section both use placeholder copy.
2. In **Final Contact** (`.contact-panel-inner`), update:
   - Phone: set the display text and change `href="tel:#"` to a real number (e.g. `tel:+15551234567`).
   - Email: use `mailto:your@email.com`.
3. In **`<!-- Sticky Mobile CTA`** at the bottom of `index.html`, update `tel:#` the same way so mobile “Call” works.

---

## Quote / lead form (important)

The quote area in the hero is a **static front-end placeholder** only. It shows labeled “field” blocks so buyers can see the layout; it does **not** collect or send data by itself.

**To receive submissions**, connect real `<form>` markup and a backend or third-party form service. Examples buyers often use (optional—not bundled, not required):

- **Formspree**, **Getform**, similar hosted form endpoints  
- **Netlify Forms** (when hosting on Netlify)  
- A **custom backend** or serverless handler  
- **WordPress** with a form plugin **if** you manually embed this HTML inside a WP template or page

Add your own `action=`, hidden fields, or JavaScript as required by the provider you choose.

---

## Sticky mobile CTA

The bar **`.mobile-cta`** is fixed to the bottom on smaller screens and **hidden from 1024px and up** (desktop uses header + in-page CTAs).

- **Call** → set `href` to your real `tel:` link.  
- **Get Quote** → points to `#contact` (final contact section). Adjust if you add a dedicated form ID.

`assets/js/main.js` adds a light **scroll shadow** on the bar (`.scrolled`) for depth; no layout shift. The page uses **extra bottom padding** on viewports where the bar shows so footer and final contact are less likely to sit under the bar—still test on a real phone.

---

## Animations and interactions (v1.1)

**No external libraries.** Reveals are progressive enhancement: if JavaScript is off or `IntersectionObserver` is missing, `main.js` leaves content visible.

- **Scroll reveal:** `.reveal`, `.reveal-quick`, `.reveal-panel`, and trust strip items animate in once when scrolled into view (`.is-visible`).
- **Stagger:** `.stagger` on **hero grid**, **service cards**, **results**, and **pricing** adds short delays between sibling cards for a calmer scan.
- **Hover:** Service cards, quote/contact panels, and FAQ rows use subtle lift or border/shadow changes in `style.css`.
- **Marquee:** The band between the trust strip and services is **CSS-only** (continuous loop); hover pauses it. Decorative only—not the only place trust copy appears.
- **Sticky mobile CTA:** Same behavior as before—light scroll shadow on `.mobile-cta`; bottom padding on `body` helps avoid overlap with footer.

**Smooth scrolling:** `html { scroll-behavior: smooth; }` is disabled automatically when `prefers-reduced-motion: reduce` is set.

## How to disable animations

1. Remove reveal classes and `.stagger` from `index.html`, and remove the **marquee** `<section class="marquee-section...">` if desired.
2. Comment out the `js-enhanced` / `IntersectionObserver` block in `assets/js/main.js` (keep menu + FAQ handlers if you still want those).
3. Delete or comment `@keyframes` / `.marquee-track` rules in `assets/css/style.css` to stop the marquee.
4. Users can also enable **reduced motion** at the OS level—your CSS already respects it.

---

## JavaScript behavior (`assets/js/main.js`)

- **Mobile menu:** toggle, link click closes menu, **Escape** closes menu.  
- **FAQ:** toggles **`.open`** and **`aria-expanded`**; **+ / −** in CSS.  
- **Reveal + stagger:** `IntersectionObserver` with safe fallbacks; stagger delays only inside `.stagger` groups.

---

## Before publishing checklist

- [ ] Replace brand name “Senatove Local” everywhere (header, footer, title if needed).  
- [ ] Set real **services**, **areas**, **reviews**, and **pricing**.  
- [ ] Set **phone** (`tel:`) and **email** (`mailto:`) and test on a device.  
- [ ] Wire the **quote block** to your form provider or backend if you need leads.  
- [ ] Test **mobile** menu, **FAQ** open/close, and **sticky CTA** above the footer.  
- [ ] Confirm **no horizontal scroll** on 375px / 768px / desktop.  
- [ ] Run a quick **console** check for errors after any custom scripts you add.

---

## License (placeholder)

This template is part of a Senatove Goods product. Replace this section with your final license before redistributing.
