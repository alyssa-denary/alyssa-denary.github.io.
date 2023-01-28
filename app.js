////////////////// Nav link highlights as user scrolls section /////////////////////
const sections = document.querySelectorAll(".section-divider");
const navLinks = document.querySelectorAll("nav ul li .nav_link");
const main = document.querySelector(".main");
const checkAndSetActiveSection = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (main.scrollTop >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
};

// For modern browsers:
main.addEventListener(
  "scroll",
  (event) => {
    checkAndSetActiveSection();
  },
  { passive: true }
);

// For older browsers:
let scrolling = false;

main.onscroll = () => {
  scrolling = true;
};

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    checkAndSetActiveSection();
  }
}, 300);

////////////////////////////// Mobile toggle nav ///////////////////////////////////////
const primaryNav = document.querySelector("#primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", (e) => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
