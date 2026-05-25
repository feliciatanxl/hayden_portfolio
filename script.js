// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add intersection observer for widget fade-ins
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select widgets to animate
const animatedWidgets = document.querySelectorAll('.widget');

// Initialize styles for animation
animatedWidgets.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    // Add slight stagger based on DOM order
    el.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(el);
});
