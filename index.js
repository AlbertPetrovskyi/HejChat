document.addEventListener("DOMContentLoaded", function() {
	Telegram.WebApp.init();
	const webApp = Telegram.WebApp;
	webApp.ready();
	webApp.expand();
});

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const question = document.getElementById('questionInput').value;
	const responseArea = document.getElementById('responseArea');
	
	// Check if the question is empty
	if (!question.trim()) {
		 responseArea.textContent = "Please enter a question again.";
		 return;
	}

	try {
		 const response = await fetch('http://127.0.0.1:8000/ask', {
			  method: 'POST',
			  headers: {
					'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({ question })
		 });

		 // Check if the response is not ok
		 if (!response.ok) {
			  throw new Error('Network response was not ok. Please try again.');
		 }

		 const data = await response.json();

		 // Set the innerHTML to render the response with HTML tags
		 responseArea.innerHTML = data.answer || "No response. Please try again.";
		 
		 // Scroll to the top of the response area
		 responseArea.scrollTop = 0;

	} catch (error) {
		 console.error(error);
		 responseArea.textContent = "An error occurred. Please try again.";
		 responseArea.scrollTop = 0;
	}

	const input = form.querySelector('input');
	const message = input.value;
	input.value = '';
});
