// Year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileLinks = document.getElementById("mobileLinks");

menuBtn?.addEventListener("click", () => {
  if (!mobileLinks) return;
  const isOpen = mobileLinks.style.display === "grid";
  mobileLinks.style.display = isOpen ? "none" : "grid";
  mobileLinks.style.gap = "10px";
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

// Page transition for internal html links only
function isInternalHtmlLink(href) {
  return href && (
    href.endsWith(".html") ||
    href.includes(".html#") ||
    href.startsWith("index.html") ||
    href.startsWith("projects.html")
  );
}

document.querySelectorAll("a.navlink").forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Allow normal behavior for external / mailto / tel / pdf / anchors
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.endsWith(".pdf") ||
      href.startsWith("#")
    ) return;

    if (isInternalHtmlLink(href)) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => (window.location.href = href), 220);
    }
  });
});
