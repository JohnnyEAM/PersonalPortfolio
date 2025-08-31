// projects-animate.js
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // reset when out of view
      }
    });
  }, { threshold: 0.3 });

  projects.forEach(project => observer.observe(project));
});
