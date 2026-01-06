// Simple JavaScript for the cake website

// Handle order button clicks
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const cakeName = this.getAttribute('data-cake');
        alert(`Thank you for ordering ${cakeName}! We will contact you soon.`);
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});