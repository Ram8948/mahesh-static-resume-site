// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Reveal on scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.card, .timeline-item, .project-card, .skill-category, .section-header');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-item');
        observer.observe(el);
    });


    // Scroll progress bar logic
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    });

    // Hero orbit interactive effect (slow down on hover)
    const orbitIcons = document.querySelectorAll('.orbiting-icon');
    const orbitContainer = document.querySelector('.orbit-container');

    if (orbitContainer) {
        orbitContainer.addEventListener('mouseenter', () => {
            orbitIcons.forEach(icon => {
                icon.style.animationPlayState = 'paused';
            });
        });

        orbitContainer.addEventListener('mouseleave', () => {
            orbitIcons.forEach(icon => {
                icon.style.animationPlayState = 'running';
            });
        });
    }

    // Dynamic color shifting for the logo
    const logoBox = document.querySelector('.logo-box');
    const colors = ['#58a6ff', '#8250df', '#f0f6fc'];
    let currentColorIndex = 0;

    if (logoBox) {
        logoBox.addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            logoBox.style.backgroundColor = colors[currentColorIndex];
        });
    }
});
