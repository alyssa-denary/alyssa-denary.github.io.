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
