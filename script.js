document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

// WhatsApp-only contact form. No email service or server is required.
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const reading = String(formData.get("reading") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const lines = [
    "مرحباً أمال، أود طلب قراءة تاروت.",
    "الاسم: " + name,
    phone ? "رقم WhatsApp الخاص بي: " + phone : "",
    "نوع القراءة: " + reading,
    "رسالتي: " + message
  ].filter(Boolean);

  const whatsappUrl = "https://wa.me/212618572431?text=" + encodeURIComponent(lines.join("\n"));
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
