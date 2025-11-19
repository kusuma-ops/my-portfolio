document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contactForm');

    hamburger.addEventListener('click', function() {
        const isExpanded = navMenu.classList.toggle('active');
        
        hamburger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        
        const spans = hamburger.querySelectorAll('span');
        if (isExpanded) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    const navbar = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    document.getElementById('home').style.opacity = '1';
    document.getElementById('home').style.transform = 'translateY(0)';

    contactForm.addEventListener('submit', function(e) {
        
        const formGroups = contactForm.querySelectorAll('.form-group');
        const formStatus = document.querySelector('.form-status');
        let isValid = true;

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const errorMessage = group.querySelector('.error-message');
            
            if (!input.value.trim()) {
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
                errorMessage.textContent = 'This field is required';
                errorMessage.style.display = 'block';
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
                errorMessage.textContent = 'Please enter a valid email address';
                errorMessage.style.display = 'block';
                isValid = false;
            } else {
                input.classList.remove('error');
                input.setAttribute('aria-invalid', 'false');
                errorMessage.textContent = '';
                errorMessage.style.display = 'none';
            }
        });

        if (isValid) {
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            formStatus.style.display = 'block';
            
            contactForm.reset();

            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please fix the errors above and try again.';
            formStatus.style.display = 'block';
        }
    });

    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorMessage = this.parentElement.querySelector('.error-message');
            if (this.value.trim()) {
                this.classList.remove('error');
                this.setAttribute('aria-invalid', 'false');
                errorMessage.textContent = '';
                errorMessage.style.display = 'none';
            }
        });

        input.addEventListener('blur', function() {
            const errorMessage = this.parentElement.querySelector('.error-message');
            if (!this.value.trim()) {
                this.classList.add('error');
                this.setAttribute('aria-invalid', 'true');
                errorMessage.textContent = 'This field is required';
                errorMessage.style.display = 'block';
            } else if (this.type === 'email' && !isValidEmail(this.value)) {
                this.classList.add('error');
                this.setAttribute('aria-invalid', 'true');
                errorMessage.textContent = 'Please enter a valid email address';
                errorMessage.style.display = 'block';
            }
        });
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        category.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
