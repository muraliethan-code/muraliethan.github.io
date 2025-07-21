document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const profile = document.getElementById("profilePic");
  const contactInfo = document.getElementById("contactInfo");
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwmum3Wruc4-fpvlpioyBLQiCaEXqwBhlxaRNdx8cBBwsBsZWfr5XPeKGv2x-Yuk3Dy/exec";

  profile.addEventListener("click", () => {
    profile.classList.toggle("slide-left");
    contactInfo.classList.toggle("show");
  });

  form.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === "success") {
        alert("Message submitted successfully!");
        if (confirm("Would you like to send another message?")) {
          form.reset();
        } else {
          window.location.href = "Porfolio.html";
        }
      } else {
        throw new Error(data.message || "Unknown error");
      }
    })
    .catch(err => {
      alert("Error sending message: " + err.message);
    });
  });
});
