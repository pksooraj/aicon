// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for elements
    initAnimations();
    initHoverEffects();
    initParallaxEffect();
    
    // Function to handle animations on scroll
    function initAnimations() {
        // Add animation classes to elements when they come into view
        const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-item, .section-header, .contact-item, .service-detail-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        // Add staggered animation delay to service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${0.1 * (index + 1)}s`;
        });
        
        // Add staggered animation delay to portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            item.style.animationDelay = `${0.1 * (index + 1)}s`;
        });
        
        // Add text shine effect to headings
        const headings = document.querySelectorAll('.page-header h1, .service-detail-content h2');
        headings.forEach(heading => {
            heading.classList.add('animate-textShine');
        });
        
        // Add float animation to service icons
        const serviceIcons = document.querySelectorAll('.service-detail-icon');
        serviceIcons.forEach(icon => {
            icon.classList.add('animate-float');
        });
    }
    
    // Function to add hover effects
    function initHoverEffects() {
        // Add glow effect to service icons on hover
        const serviceIcons = document.querySelectorAll('.service-icon i');
        serviceIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.classList.add('animate-pulse');
            });
            icon.addEventListener('mouseleave', function() {
                this.classList.remove('animate-pulse');
            });
        });
    }
    // Navigation toggle functionality
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Page transition effects
    function initPageTransitions() {
        // Add fade effect when navigating between pages
        const pageLinks = document.querySelectorAll('a:not([href^="#"])');
        
        pageLinks.forEach(link => {
            // Only apply to internal links
            if (link.hostname === window.location.hostname) {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href && !href.startsWith('#') && href !== '') {
                        e.preventDefault();
                        
                        // Fade out current page
                        document.body.style.opacity = 0;
                        document.body.style.transition = 'opacity 0.3s ease';
                        
                        // Navigate to new page after transition
                        setTimeout(() => {
                            window.location.href = href;
                        }, 300);
                    }
                });
            }
        });
        
        // Fade in when page loads
        window.addEventListener('pageshow', function() {
            document.body.style.opacity = 1;
        });
    }
    
    // Initialize page transitions
    initPageTransitions();
    
    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    function setActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            
            const formData = new FormData(contactForm);
            const formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Form submitted with values:', formValues);
            
            // Show success message (in a real application)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'var(--header-bg)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'var(--header-bg)';
    }
});

// Parallax effect function
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(window.scrollY * speed);
                element.style.backgroundPosition = `50% ${yPos}px`;
            });
        });
    }
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('parallax-bg');
        heroSection.setAttribute('data-speed', '0.3');
        
        // Add parallax effect to hero content and image
        window.addEventListener('scroll', function() {
            if (window.scrollY < 600) {
                const heroContent = heroSection.querySelector('.hero-content');
                const heroImage = heroSection.querySelector('.hero-image');
                
                if (heroContent) {
                    heroContent.style.transform = `translateY(${window.scrollY * 0.1}px)`;
                }
                
                if (heroImage) {
                    heroImage.style.transform = `translateY(${window.scrollY * 0.15}px)`;
                }
            }
        });
    }
    
    // Add parallax effect to testimonials section
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        testimonialsSection.classList.add('parallax-bg');
        testimonialsSection.setAttribute('data-speed', '0.2');
    }
    
    // Add parallax effect to CTA section
    const ctaSection = document.querySelector('.cta');
    if (ctaSection) {
        ctaSection.classList.add('parallax-bg');
        ctaSection.setAttribute('data-speed', '0.25');
    }
}