document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    
    if (menuToggle && header) {
         menuToggle.addEventListener('click', () => {
              header.classList.toggle('mobile-menu-active');
         });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              if (targetId === '#') return;
              
              const targetElement = document.querySelector(targetId);
              
              if (targetElement) {
                    window.scrollTo({
                         top: targetElement.offsetTop - 80,
                         behavior: 'smooth'
                    });
                    
                    header.classList.remove('mobile-menu-active');
              }
         });
    });
    
    // Highlight nav links on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNavLink() {
         const scrollPosition = window.scrollY + 100;
         
         sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionId = section.getAttribute('id');
              
              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                         link.classList.remove('active');
                         if (link.getAttribute('href') === `#${sectionId}`) {
                              link.classList.add('active');
                         }
                    });
              }
         });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();
    
    // Add scroll animations
    function setupScrollAnimations() {
        // Apply animation classes to elements
        const animationMap = [
            // Hero section with increased delays for better sequence
            { selector: '.hero h1', classes: ['animate', 'slide-up'] },
            { selector: '.hero-content p', classes: ['animate', 'slide-up', 'delay-200'] },
            { selector: '.hero-buttons', classes: ['animate', 'slide-up', 'delay-300'] },
            { selector: '.hero-visual', classes: ['animate', 'fade-in', 'delay-200'] },
            
            // Section headers and intros
            { selector: 'section h2', classes: ['animate', 'fade-in'] },
            { selector: '.section-intro', classes: ['animate', 'fade-in', 'delay-100'] },
            
            // Feature cards with staggered delays
            ...Array.from(document.querySelectorAll('.feature-card')).map((_, index) => ({
                selector: `.feature-card:nth-child(${index + 1})`,
                classes: ['animate', 'slide-up', `delay-${((index % 4) + 1) * 100}`]
            })),
            
            // Setup steps
            ...Array.from(document.querySelectorAll('.step')).map((_, index) => ({
                selector: `.step:nth-child(${index + 1})`,
                classes: ['animate', 'slide-right', `delay-${index * 100}`]
            })),
            
            // Model cards
            ...Array.from(document.querySelectorAll('.model-card')).map((_, index) => ({
                selector: `.model-card:nth-child(${index + 1})`,
                classes: ['animate', 'slide-up', `delay-${((index % 4) + 1) * 100}`]
            })),
            
            // Usage steps
            ...Array.from(document.querySelectorAll('.usage-step')).map((_, index) => ({
                selector: `.usage-step:nth-child(${index + 1})`,
                classes: ['animate', 'slide-up', `delay-${index * 100}`]
            })),
            
            // Open source section
            { selector: '.open-source-content', classes: ['animate', 'fade-in'] },
            { selector: '.github-cta', classes: ['animate', 'slide-up', 'delay-200'] }
        ];
        
        // Apply the classes
        animationMap.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(el => {
                item.classes.forEach(cls => el.classList.add(cls));
            });
        });
        
        // Function to check if element is in viewport and animate
        function checkVisibility() {
            const animatedElements = document.querySelectorAll('.animate');
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            
            animatedElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                
                // Calculate top and bottom positions relative to viewport
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                const elementHeight = rect.height;
                
                // Constants for visibility thresholds
                const appearThreshold = 150; // When to show element (pixels from bottom of viewport)
                const disappearThreshold = -50; // When to hide element (pixels from top of viewport)
                
                // Check if element is in hero section to handle differently
                const isHeroElement = element.closest('.hero') !== null;
                
                if (isHeroElement) {
                    // For hero elements, we want to:
                    // 1. Show them when near the top of the page
                    // 2. Hide them when scrolled down further
                    
                    // Show when scrolled near top
                    if (scrollPosition < windowHeight * 0.7) {
                        element.classList.add('visible');
                    } 
                    // Hide when scrolled down
                    else if (scrollPosition > windowHeight) {
                        element.classList.remove('visible');
                    }
                } else {
                    // For non-hero elements, use standard scroll behavior
                    // Show when element enters viewport from bottom
                    if (elementTop < windowHeight - appearThreshold) {
                        element.classList.add('visible');
                    } 
                    // Hide when element leaves viewport from top
                    else if (elementBottom < disappearThreshold) {
                        element.classList.remove('visible');
                    }
                    // Hide when element is below viewport
                    else if (elementTop > windowHeight) {
                        element.classList.remove('visible');
                    }
                }
            });
        }
        
        // Initial check
        checkVisibility();
        
        // Check on scroll
        window.addEventListener('scroll', checkVisibility);
    }
    
    // Initialize animations
    setupScrollAnimations();
});