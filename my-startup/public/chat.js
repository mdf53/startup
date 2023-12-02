function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}
const socket = new WebSocket('ws://your-websocket-server-url');

const chatDisplay = document.getElementById('chat-display');
const messageInput = document.getElementById('message-input');

// Event listener for when the WebSocket connection is established
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
});

// Event listener for when a message is received from the server
socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.text, 'received');
});

// Function to send a message to the server
function sendMessage() {
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
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
