document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // reset
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
// ABOUT HERO ANIMATION ON SCROLL (with reset)
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  function checkInView() {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
        el.classList.add("show");
      } else {
        el.classList.remove("show"); // reset when out of view
      }
    });
  }

  window.addEventListener("scroll", checkInView);
  checkInView();
});
