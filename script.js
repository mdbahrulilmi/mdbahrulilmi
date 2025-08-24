// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Scroll animation
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", checkFadeIn);
checkFadeIn();
