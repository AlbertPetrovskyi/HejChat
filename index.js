document.addEventListener("DOMContentLoaded", function () {
  Telegram.WebApp.init();
  const webApp = Telegram.WebApp;
  webApp.ready();
  webApp.expand();

  // Apply safe area insets programmatically
  const updateSafeArea = () => {
    document.body.style.paddingTop = `${webApp.safeAreaInsets.top}px`;
    document.body.style.paddingBottom = `${webApp.safeAreaInsets.bottom}px`;
  };
  updateSafeArea();
  webApp.onEvent("viewportChanged", updateSafeArea);
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const question = document.getElementById("questionInput").value;
  const responseArea = document.getElementById("responseArea");

  if (!question.trim()) {
    responseArea.textContent = "No prompt, no answer.";
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error("Even AI needs a break...");
    }

    const data = await response.json();

    responseArea.innerHTML = data.answer || "Even AI needs a break...";
    responseArea.scrollTop = 0;
  } catch (error) {
    console.error(error);
    responseArea.textContent = "Even AI needs a break...";
    responseArea.scrollTop = 0;
  }

  const input = form.querySelector("input");
  input.value = "";
});
