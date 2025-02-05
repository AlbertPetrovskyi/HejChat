document.addEventListener("DOMContentLoaded", function() {
	Telegram.WebApp.init();
	const webApp = Telegram.WebApp;
	webApp.ready();
	webApp.expand();
});

document.getElementById('questionForm').addEventListener('submit', async (e) => {
	e.preventDefault();
	const question = document.getElementById('questionInput').value;
	const responseArea = document.getElementById('responseArea');

	try {
		 const response = await fetch('http://127.0.0.1:8000/ask', {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify({ question })
		 });

		 const data = await response.json();
		 responseArea.textContent = "Answer: " + (data.answer || "No response");
	} catch (error) {
		 console.error(error);
		 responseArea.textContent = "An error occurred.";
	}
});
