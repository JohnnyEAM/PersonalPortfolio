// qualifications-animate.js
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".qual-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // reset when out of view
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
});
