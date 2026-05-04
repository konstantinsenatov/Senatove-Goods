/**
 * Senatove Consultant Landing — vanilla JS only.
 * Mobile nav, FAQ, scroll reveal + stagger, method-step sequencing.
 * See README.md: Animations and interactions.
 */

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  const revealElements = document.querySelectorAll(".reveal, .reveal-soft, .reveal-line");
  const methodSteps = document.querySelectorAll(".method-step");
  const staggerGroups = document.querySelectorAll(".stagger");

  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll(".reveal, .reveal-soft, .reveal-line");
    children.forEach((child, index) => {
      child.style.transitionDelay = `${Math.min(index * 90, 300)}ms`;
    });
  });

  const showAll = () => {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    methodSteps.forEach((step) => step.classList.add("is-visible"));
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
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    methodSteps.forEach((step, index) => {
      step.style.transitionDelay = `${Math.min(index * 100, 320)}ms`;
      revealObserver.observe(step);
    });
  }
}
