/* ============================================================================
 * main.js — Navigation toggle, scroll reveal animations, and smooth UI behavior
 * ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Mobile menu burger toggle
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navlinks");

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    // Close menu when clicking links on mobile
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Reveal elements on scroll using IntersectionObserver
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver isn't supported
    reveals.forEach((el) => el.classList.add("show"));
  }
});
