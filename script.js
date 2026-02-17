const menuBtn = document.getElementById("menuBtn");
const mobileLinks = document.getElementById("mobileLinks");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileLinks.style.display === "grid";
  mobileLinks.style.display = isOpen ? "none" : "grid";
  mobileLinks.style.gap = "10px";
});
