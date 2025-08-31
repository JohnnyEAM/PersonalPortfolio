// ABOUT SECTION ANIMATION ON SCROLL (with reset)
document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".about-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        about.classList.add("show");
      } else {
        about.classList.remove("show"); // reset when out of view
      }
    });
  }, { threshold: 0.3 });

  observer.observe(about);
});
