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

## Animations and motion

- Sections use **reveal classes** (`.reveal`, `.reveal-quick`, etc.) animated with `IntersectionObserver` when JS runs.
- If the user’s system prefers reduced motion, **CSS `prefers-reduced-motion`** disables transitions and keeps content visible.
- To **disable animations entirely**, remove the `reveal` / `reveal-quick` / `reveal-panel` classes from elements in `index.html`, or strip the relevant block from `main.js` (not required for most buyers).

---

## JavaScript behavior (`assets/js/main.js`)

- **Mobile menu:** toggle, link click closes menu, **Escape** closes menu.  
- **FAQ:** clicking the question toggles **`.open`** on `.faq-item` and updates **`aria-expanded`**; **+ / −** is styled in CSS.  
- **Reveal on scroll:** optional; fails open (everything visible) if `IntersectionObserver` is missing.

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
