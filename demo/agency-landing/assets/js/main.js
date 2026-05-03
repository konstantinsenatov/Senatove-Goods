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

  const revealElements = document.querySelectorAll(".reveal, .reveal-up, .reveal-scale");
  const staggerGroups = document.querySelectorAll(".stagger");
  const parallaxElements = document.querySelectorAll(".parallax-soft");

  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll(".reveal, .reveal-up, .reveal-scale");
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 70}ms`;
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
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  if (parallaxElements.length > 0) {
    const updateParallax = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      parallaxElements.forEach((element) => {
        const speed = 0.03;
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    });
  }
}
