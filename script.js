// ===== Year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ===== Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileLinks = document.getElementById("mobileLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileLinks?.style.display === "grid";
  if (!mobileLinks) return;
  mobileLinks.style.display = isOpen ? "none" : "grid";
  mobileLinks.style.gap = "10px";
});

// ===== Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

// ===== Page transition for internal navigation
function isInternalHtmlLink(a) {
  const href = a.getAttribute("href") || "";
  return href.endsWith(".html") || href.includes(".html#") || href.startsWith("index.html") || href.startsWith("projects.html");
}

document.querySelectorAll("a.navlink").forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href) return;

    // allow normal for external links / mailto / tel
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // handle internal html navigation with fade-out
    if (isInternalHtmlLink(a)) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    }
  });
});
