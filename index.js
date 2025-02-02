document.addEventListener("DOMContentLoaded", function() {
	Telegram.WebApp.init();
	const webApp = Telegram.WebApp;
	webApp.ready();
	webApp.expand();
});

function closeBot() {
	Telegram.WebApp.close();
}
