// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Get all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a[href^="#"]');

// Add scroll event listener
window.onscroll = () => {
    // Toggle active class for navigation links based on scroll position
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // Toggle sticky class for header based on scroll position
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close menu and reset menu icon on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Reveal animation for different sections
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Initialize Typed.js for text animation
const typed = new Typed('.multiple-text', {
    strings: ['Gestionnaire De Sinistre', 'Juriste', 'Fiscaliste','Professionnel RH'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Get the Skills & Technologies section
let skillsSection = document.querySelector('.skills');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    // Toggle active class for the Skills & Technologies section
    skillsSection.classList.toggle('active');
};
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const mobileNumberInput = document.getElementById('mobileNumber');
        const emailSubjectInput = document.getElementById('emailSubject');
        const messageInput = document.getElementById('message');

        const formData = {
            fullName: fullNameInput.value,
            email: emailInput.value,
            mobileNumber: mobileNumberInput.value,
            emailSubject: emailSubjectInput.value,
            message: messageInput.value
        };

        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                fullNameInput.value = '';
                emailInput.value = '';
                mobileNumberInput.value = '';
                emailSubjectInput.value = '';
                messageInput.value = '';
            } else {
                alert('Failed to send message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
