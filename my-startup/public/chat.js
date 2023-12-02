function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}

const socket = new WebSocket('ws://localhost:3000');

const chatDisplay = document.getElementById('chat-display');
const messageInput = document.getElementById('message-input');

// Event listener for when the WebSocket connection is established
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
});

// Event listener for when a message is received from the server
socket.addEventListener('message', (event) => {
    if (typeof event.data === 'string') {
        // If the data is a string, parse it as JSON
        const message = JSON.parse(event.data);
        displayMessage(message.text, 'received');
    } else if (event.data instanceof Blob) {
        // If the data is a Blob, extract the text and parse it as JSON
        event.data.text().then((text) => {
            const message = JSON.parse(text);
            displayMessage(message.text, 'received');
        });
    }
});

// Event listener for WebSocket connection errors
socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

// Event listener for pressing the "Enter" key in the message input
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Prevent the default behavior of the "Enter" key (e.g., newline in text area)
        event.preventDefault();
        
        // Call the sendMessage function
        sendMessage();
    }
});

// Function to send a message to the server
function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== '' && socket.readyState === WebSocket.OPEN) {
        const message = {
            text: messageText,
            type: 'sent',
        };

        socket.send(JSON.stringify(message));
        displayMessage(messageText, 'sent');

        // Clear the input field after sending the message
        messageInput.value = '';
    }
}

// Function to display a message in the chat display
function displayMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(type === 'sent' ? 'sent-message' : 'received-message');
    messageElement.textContent = message;

    chatDisplay.appendChild(messageElement);

    // Scroll to the bottom of the chat display to show the latest message
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
