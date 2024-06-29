// Sample responses (you can expand this)
const responses = {
    "hello": "Hi there!",
    "how are you?": "I'm doing well, thank you!",
    "tell me a joke": "My AI isn't developed enough for human humor...",
    "what is your name?": "I am Noob AI.",
    "who created you?": "I was coded using the help of another AI",
    "what can you do?": "Some specific stuff only...",
    "why do you exist": "Because I do.",
    "exit": "Goodbye! Have a nice day."
};

// Function to check if a string contains inappropriate words or weird things
function isSafeInput(input) {
    const inappropriateWords = ["shit", "bitch", "fuck"]; // Add inappropriate words here
    const weirdThings = ["ask you out", "marry me"]; // Add weird phrases here

    const lowerInput = input.toLowerCase();

    // Check for inappropriate words
    for (let word of inappropriateWords) {
        if (lowerInput.includes(word)) {
            return false;
        }
    }

    // Check for weird phrases
    for (let phrase of weirdThings) {
        if (lowerInput.includes(phrase)) {
            return false;
        }
    }

    return true;
}

// Function to generate AI response
function generateResponse(userInput) {
    userInput = userInput.trim().toLowerCase();

    if (!isSafeInput(userInput)) {
        return "I'm sorry, I can't respond to that.";
    }

    let response = responses[userInput];
    if (!response) {
        response = "Sorry, I don't understand that.";
    }
    return response;
}

// Function to handle user input and generate AI response
function askQuestion() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    // Append user's question to chatbox
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "sent");
    userMessage.innerHTML = `<p>${userInput}</p>`;
    chatbox.appendChild(userMessage);

    // Generate AI's response
    const aiResponse = generateResponse(userInput);

    // Append AI's response to chatbox
    const aiMessage = document.createElement("div");
    aiMessage.classList.add("message", "received");
    aiMessage.innerHTML = `<p>${aiResponse}</p>`;
    chatbox.appendChild(aiMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Scroll chatbox to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Listen for Enter key press in the input field
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior (form submission)
        askQuestion(); // Call the askQuestion function to handle user input
    }
});
