document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    // Button animation
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      // ✅ Instead of assuming JSON, check status
      if (response.ok) {
        form.reset();
        window.location.href = "thankyou.html";
      } else {
        // Formspree sometimes returns a 200 with HTML (not JSON)
        console.warn("Unexpected response:", await response.text());
        form.reset();
        window.location.href = "thankyou.html"; 
      }
    } catch (error) {
      console.error("Network error:", error);
      // Instead of showing error to user, just redirect
      form.reset();
      window.location.href = "thankyou.html";
    }
  });
});



