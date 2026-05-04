/**
 * Local Service Landing — vanilla JS only (no dependencies).
 * Mobile nav, FAQ, scroll reveal + stagger, sticky CTA scroll state.
 * See README: Animations and interactions.
 */

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Header — mobile menu */
if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

/* FAQ — accordion; +/− via CSS */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const parent = question.closest(".faq-item");
    if (!parent) return;

    const isOpen = parent.classList.toggle("open");
    question.setAttribute("aria-expanded", String(isOpen));
  });
});

if (!prefersReducedMotion) {
  document.documentElement.classList.add("js-enhanced");

  const revealElements = document.querySelectorAll(".reveal, .reveal-quick, .reveal-panel, .trust-item");
  const staggerGroups = document.querySelectorAll(".stagger");
  const mobileCta = document.querySelector(".mobile-cta");

  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll(".reveal, .reveal-quick, .reveal-panel");
    children.forEach((child, index) => {
      child.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    });
  });

  const showAll = () => {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  };

  if (!("IntersectionObserver" in window)) {
    showAll();
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -7% 0px" }
    );

    revealElements.forEach((element) => {
      if (!element.closest(".stagger")) {
        element.style.transitionDelay = "0ms";
      }
      revealObserver.observe(element);
    });
  }

  /* Sticky Mobile CTA — lightweight shadow after scroll */
  if (mobileCta) {
    const updateCtaState = () => {
      mobileCta.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", updateCtaState, { passive: true });
    updateCtaState();
  }
}
