(function () {
  "use strict";

  const config = window.BREWMATH_CONFIG || {};
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");

  function setStoreLinks() {
    const storeLinks = document.querySelectorAll("[data-app-store]");
    const isReleased = config.released === true && Boolean(config.appStoreUrl);

    storeLinks.forEach(function (link) {
      const label = link.querySelector("[data-store-label]");

      if (isReleased) {
        link.href = config.appStoreUrl;
        link.target = "_blank";
        link.rel = "noopener";
        link.classList.remove("is-disabled");
        link.setAttribute("aria-label", "Download BrewMath on the App Store");
        if (label) label.textContent = "Download on the App Store";
      } else {
        link.href = "index.html#release-status";
        link.removeAttribute("target");
        link.removeAttribute("rel");
        link.classList.add("is-disabled");
        link.setAttribute("aria-label", "BrewMath is preparing for App Store release");
        if (label) label.textContent = "Coming to the App Store";
      }
    });

    document.querySelectorAll("[data-release-status]").forEach(function (node) {
      node.textContent = isReleased
        ? "BrewMath is available on the App Store."
        : "BrewMath is preparing for App Store release.";
    });

    document.querySelectorAll("[data-support-email]").forEach(function (link) {
      const email = config.supportEmail || "13911100061@163.com";
      link.href = "mailto:" + email;
      if (link.dataset.showEmail === "true") link.textContent = email;
    });
  }

  function closeNavigation() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNavigation();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNavigation();
        navToggle.focus();
      }
    });
  }

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealNodes.forEach(function (node) {
      observer.observe(node);
    });
  } else {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }

  document.querySelectorAll("[data-current-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  setStoreLinks();
})();
