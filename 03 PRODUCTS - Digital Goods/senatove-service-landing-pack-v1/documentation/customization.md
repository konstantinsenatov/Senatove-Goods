# Customization Guide

Use this alongside each template’s folder-level `README.md` for template-specific notes.

## Editing text

- Open **`index.html`** in your editor.
- Replace headings, paragraphs, button labels, and list items.
- **Keep section `id` attributes** (for example `id="services"`, `id="contact"`) if your header and footer links still point to `#services`, `#contact`, etc. If you rename IDs, update every `href` that references them.

## Editing colors and global style

- Open **`assets/css/style.css`**.
- At the top, find the **`:root { ... }`** block.
- Update variables such as:
  - **`--bg`**, **`--surface`** — page and card backgrounds  
  - **`--text`**, **`--text-muted`** — body copy  
  - **`--accent`**, **`--border`** — buttons and outlines  

Change one variable at a time and refresh the browser to see the effect.

## Editing buttons and links

- Button text: change the text inside `<a class="btn ...">` (or `<button>` where used).
- **Section links:** `#services`, `#pricing`, `#contact`, etc.
- **Phone:** `href="tel:+15551234567"` (use your country code and number).
- **Email:** `href="mailto:you@domain.com"`.
- **External:** full `https://...` URLs.

## Replacing placeholder visuals

- Put images in **`assets/images/`**.
- Reference them from `index.html` with relative paths, for example:  
  `assets/images/hero.jpg`
- Always set descriptive **`alt`** text for photos that convey information.

## Connecting forms (quote panels, contact blocks)

- Shipped “form” areas are **markup placeholders** unless you replace them with a real `<form>` or provider embed.
- To collect submissions, you typically:
  - Add a **form `action`** pointing to your provider or API, or  
  - Use your host’s form feature, or  
  - Integrate with a **CMS** or **backend** you control.

No backend is bundled; you choose the service that fits your stack.

## Disabling animations

- Templates may use classes like **`reveal`** and short CSS transitions, controlled in **`assets/js/main.js`** with **`IntersectionObserver`** where enabled.
- **User preference:** `prefers-reduced-motion` is respected in CSS so many users see less motion automatically.
- To go fully static: remove **`reveal` / `reveal-quick` / `reveal-panel`** classes from `index.html`, or trim the corresponding script block in `main.js` (test the menu and FAQ after changes).

## Deploying to static hosting

- Upload the **template folder** contents (or the whole pack if you only need one template) to:
  - **GitHub Pages**, **Netlify**, **Cloudflare Pages**, **any traditional host** with static file support.
- Ensure **`index.html`** is at the folder root you serve as the site root (or adjust paths if you use a subfolder).

## After changes

Reload with cache bypass (hard refresh) and check **mobile width** in browser dev tools before going live.
