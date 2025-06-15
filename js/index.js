document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const header = document.querySelector('header');
	
	if (menuToggle && header) {
			menuToggle.addEventListener('click', () => {
				header.classList.toggle('mobile-menu-active');
			});
	}
	
	
	const backToTopButton = document.getElementById('back-to-top');
	
	if (backToTopButton) {
		
		window.addEventListener('scroll', () => {
				if (window.scrollY > 300) {
					backToTopButton.classList.add('visible');
				} else {
					backToTopButton.classList.remove('visible');
				}
		});
		
		
		backToTopButton.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
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
	
	
	function setupScrollAnimations() {
		
		const animationMap = [
				
				{ selector: '.hero h1', classes: ['animate', 'slide-up'] },
				{ selector: '.hero-content p', classes: ['animate', 'slide-up', 'delay-200'] },
				{ selector: '.hero-visual', classes: ['animate', 'fade-in', 'delay-200'] },
				
				
				{ selector: 'section h2', classes: ['animate', 'fade-in'] },
				{ selector: '.section-intro', classes: ['animate', 'fade-in', 'delay-100'] },
				
				
				...Array.from(document.querySelectorAll('.feature-card')).map((_, index) => ({
					selector: `.feature-card:nth-child(${index + 1})`,
					classes: ['animate', 'slide-up', `delay-${((index % 4) + 1) * 100}`]
				})),
				
				
				...Array.from(document.querySelectorAll('.step')).map((_, index) => ({
					selector: `.step:nth-child(${index + 1})`,
					classes: ['animate', 'slide-right', `delay-${index * 100}`]
				})),
				
				
				...Array.from(document.querySelectorAll('.model-card')).map((_, index) => ({
					selector: `.model-card:nth-child(${index + 1})`,
					classes: ['animate', 'slide-up', `delay-${((index % 4) + 1) * 100}`]
				})),
				
				
				...Array.from(document.querySelectorAll('.usage-step')).map((_, index) => ({
					selector: `.usage-step:nth-child(${index + 1})`,
					classes: ['animate', 'slide-up', `delay-${index * 100}`]
				})),
				
				
				{ selector: '.open-source-content', classes: ['animate', 'fade-in'] },
				{ selector: '.github-cta', classes: ['animate', 'slide-up', 'delay-200'] }
		];
		
		
		animationMap.forEach(item => {
				const elements = document.querySelectorAll(item.selector);
				elements.forEach(el => {
					item.classes.forEach(cls => el.classList.add(cls));
				});
		});
		
		
		function checkVisibility() {
				const animatedElements = document.querySelectorAll('.animate');
				const windowHeight = window.innerHeight;
				const scrollPosition = window.scrollY;
				
				animatedElements.forEach(element => {
					const rect = element.getBoundingClientRect();
					
					
					const elementTop = rect.top;
					const elementBottom = rect.bottom;
					const elementHeight = rect.height;
					
					
					const appearThreshold = 150; 
					const disappearThreshold = -50; 
					
					
					const isHeroElement = element.closest('.hero') !== null;
					
					if (isHeroElement) {
						
						if (scrollPosition < windowHeight * 0.7) {
								element.classList.add('visible');
						} 
						
						else if (scrollPosition > windowHeight) {
								element.classList.remove('visible');
						}
					} else {
						
						
						if (elementTop < windowHeight - appearThreshold) {
								element.classList.add('visible');
						} 
						
						else if (elementBottom < disappearThreshold) {
								element.classList.remove('visible');
						}
						
						else if (elementTop > windowHeight) {
								element.classList.remove('visible');
						}
					}
				});
		}
		
		
		checkVisibility();
		
		
		window.addEventListener('scroll', checkVisibility);
	}
	
	
	setupScrollAnimations();
});