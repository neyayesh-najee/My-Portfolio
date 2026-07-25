// Render Lucide icons on load and initiate custom scripts
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    setupContactForm();
});

// Simple form submission feedback
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you, Neyayesh! Your message has been sent successfully.');
            form.reset();
        });
    }
}
