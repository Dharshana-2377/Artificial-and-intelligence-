
function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim().toLowerCase();

    if (message === "") {
        alert("Please enter a message");
        return;
    }

    let chatbox = document.getElementById("chatbox");

    let userMessage = document.createElement("p");
    userMessage.className = "user";
    userMessage.innerText = input.value;
    chatbox.appendChild(userMessage);

    let response = "";

    if (message.includes("hello") || message.includes("hi")) {
        response = "Hello! Nice to meet you.";
    }
    else if (message.includes("name")) {
        response = "I am your Smart AI Assistant.";
    }
    else if (message.includes("how are you")) {
        response = "I am doing great! How can I help you?";
    }
    else if (message.includes("ai")) {
        response = "AI stands for Artificial Intelligence.";
    }
    else if (message.includes("bye")) {
        response = "Goodbye! Have a nice day.";
    }
    else {
        response = "Sorry, I don't understand. Try another question.";
    }

    let botMessage = document.createElement("p");
    botMessage.className = "bot";
    botMessage.innerText = response;
    chatbox.appendChild(botMessage);

    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
