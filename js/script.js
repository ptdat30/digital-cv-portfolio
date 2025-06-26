// js/script.js

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', (event) => {
    AOS.init({
        duration: 1000, // duration of the animation (ms)
        once: true,    // whether animation should only happen once - while scrolling down
    });
});

// Any other custom JavaScript for interactions can go here
// (e.g., smooth scrolling, dynamic content loading if needed)