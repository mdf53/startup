// Function to check and display checkboxes for the logged-in user
function displayCheckboxesForUser() {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
        const checkboxes = loggedInUser.checkboxes;

        // Display checkboxes on the UI (modify as needed)
        for (const checkbox in checkboxes) {
            if (checkboxes.hasOwnProperty(checkbox)) {
                const isChecked = checkboxes[checkbox];
                console.log(`Checkbox ${checkbox}: ${isChecked}`);
                // You can update your UI here based on the checkbox status
            }
        }
    } else {
        console.log("No user is currently logged in.");
    }
}

// Function to update checkboxes for the logged-in user
function updateCheckboxesForUser(checkboxName, isChecked) {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
        // Update the checkbox value for the logged-in user
        loggedInUser.checkboxes[checkboxName] = isChecked;

        // Save the updated user to local storage
        saveUserToLocalstorage(loggedInUser);

        console.log(`Checkbox ${checkboxName} updated to ${isChecked}`);
    } else {
        console.log("No user is currently logged in.");
    }
}

// Helper function to get the currently logged-in user
function getLoggedInUser() {
    // Assume you have a function to retrieve the logged-in user (e.g., from session storage)
    // Implement this function based on your authentication mechanism
    return localStorage.getItem('loggedInUser');
}
