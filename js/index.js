document.addEventListener('DOMContentLoaded', () => {
	// Mobile menu toggle
	const menuToggle = document.querySelector('.menu-toggle');
	const header = document.querySelector('header');
	
	if (menuToggle && header) {
		 menuToggle.addEventListener('click', () => {
			  header.classList.toggle('mobile-menu-active');
		 });
	}
	
	// Smooth scrolling for anchor links
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
					
					// Close mobile menu if open
					header.classList.remove('mobile-menu-active');
			  }
		 });
	});
	
	// Chat animation
	const typingMessage = document.querySelector('.chat-message.typing');
	
	if (typingMessage) {
		 setTimeout(() => {
			  // Create new assistant message
			  const newMessage = document.createElement('div');
			  newMessage.className = 'chat-message assistant';
			  
			  const messageContent = document.createElement('p');
			  messageContent.textContent = '6 CO₂ + 6 H₂O + sluneční energie → C₆H₁₂O₆ + 6 O₂';
			  
			  newMessage.appendChild(messageContent);
			  
			  // Replace typing with actual message
			  typingMessage.parentNode.replaceChild(newMessage, typingMessage);
		 }, 2000);
	}
	
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
});