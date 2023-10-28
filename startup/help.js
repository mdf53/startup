// Get references to the button and chat box elements
const liveHelpButton = document.getElementById("liveHelpButton");
const chatBox = document.getElementById("chatBox");

// Add a click event listener to the button
liveHelpButton.addEventListener("click", function () {
    // Toggle the chat box's visibility
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
    } else {
        chatBox.style.display = "none";
    }
});