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
      step.style.transitionDelay = `${index * 120}ms`;
      revealObserver.observe(step);
    });
  }
}
