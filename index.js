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

        if (!response.ok) {
            throw new Error('Network response was not ok. Please try again.');
        }

        const data = await response.json();

        responseArea.textContent = data.answer || "No response. Please try again.";
    } catch (error) {
        console.error(error);
        responseArea.textContent = "An error occurred. Please try again.";
    }
});

