document.querySelector(".menu-btn").addEventListener("click", () => {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("show");
  // Toggle vertical scroll
  navMenu.addEventListener("transitionend", () => {
    const overflow = navMenu.classList.contains("show") ? "hidden" : "scroll";
    document.body.style.overflowY = overflow;
  });
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
