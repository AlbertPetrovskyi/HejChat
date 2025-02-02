document.addEventListener("DOMContentLoaded", function() {
	Telegram.WebApp.init();
	const webApp = Telegram.WebApp;
	webApp.ready();
});

function closeBot() {
	Telegram.WebApp.close();
}
