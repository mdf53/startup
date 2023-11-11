
//Add the ability to save Which religions you want to see
// Function to save the checkbox state in local storage
function saveCheckboxState(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    localStorage.setItem(checkboxId, checkbox.checked);
}

// Function to load and set the checkbox state from local storage
function loadCheckboxState(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    const savedState = localStorage.getItem(checkboxId);
    
    if (savedState === "true") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Attach event listeners to the checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        saveCheckboxState(checkbox.id);
    });
});

// Load the initial state of checkboxes
checkboxes.forEach((checkbox) => {
    loadCheckboxState(checkbox.id);
});

// export {checkboxes};