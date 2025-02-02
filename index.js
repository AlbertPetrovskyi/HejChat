document.addEventListener("DOMContentLoaded", function() {
	Telegram.WebApp.init();
	const webApp = Telegram.WebApp;
	webApp.ready();
});

function shutdownBot() {
	fetch('/shutdown', {
		 method: 'POST'
	})
	.then(response => {
		 if(response.ok) {
			  alert('Bot has been shut down successfully');
		 } else {
			  alert('Failed to shut down the bot');
		 }
	})
	.catch(error => {
		 console.error('Error:', error);
		 alert('Error shutting down the bot');
	});
}
