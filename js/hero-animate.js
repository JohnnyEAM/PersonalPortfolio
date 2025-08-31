// HERO ANIMATION ON SCROLL (with reset)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hero.classList.add("show");
      } else {
        hero.classList.remove("show"); // reset when out of view
      }
    });
  }, { threshold: 0.5 });

  observer.observe(hero);
});



