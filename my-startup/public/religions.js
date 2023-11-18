// Load the checkboxes based on the currently logged-in user
function loadPage() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const userData = getUserByUsername(loggedInUser);

  if (userData) {
    // Assuming checkboxes have ids like 'item1', 'item2', etc.
    document.getElementById('Christianity').checked = userData.item1 || false;
    document.getElementById('LDS').checked = userData.item2 || false;
    document.getElementById('Islam').checked = userData.item3 || false;
    document.getElementById('Hinduism').checked = userData.item4 || false;
    // Add more lines for additional checkboxes
  }
}

// Update the checkboxes and save the data when the form is submitted
function submitReligionsForm() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const Christianity = document.getElementById('Christianity').checked;
  const LDS = document.getElementById('LDS').checked;
  const Islam = document.getElementById('Islam').checked;
  const Hinduism = document.getElementById('Hinduism').checked;

  // Add more lines for additional checkboxes
  let existingUserData = JSON.parse(localStorage.getItem('userData')) || [];



  let newUserData = {
    username: loggedInUser,
    Christianity: Christianity,
    LDS: LDS,
    Islam: Islam,
    Hinduism: Hinduism
    // Add more properties for additional checkboxes
  };

  // existingUserData.push(newUserData);

  // // Save the updated data to local storage
  // localStorage.setItem('userData', JSON.stringify(existingUserData));
  saveUserData(loggedInUser, newUserData);

}

// Helper function to get user data by username
function getUserByUsername(username) {
  const userD = JSON.parse(localStorage.getItem('userData')) || [];

  // Find the user in the array by username
  return userD.find(user => user.username === username) || null;
}

// Function to update user data (checkboxes) on the server
function updateUserDataOnServer(username, userData) {
  // Send a POST request to your server endpoint to update user data
  console.log("In update user data on server.");
  fetch('/api/update-user-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, userData }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('User data updated on the server:', data);
    })
    .catch(error => {
      console.error('Error updating user data on the server:', error);
    });
}

// Function to save user data (checkboxes) to both local storage and the server
function saveUserData(username, userData) {
  // Save user data to local storage
  saveUserDataToLocal(username, userData);

  // Save user data to the server
  updateUserDataOnServer(username, userData);

  // Perform additional logic if needed
}

// Function to save user data (checkboxes) to local storage
function saveUserDataToLocal(username, userData) {
  const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];

  // Find the index of the user data in the array by username
  const index = existingUserData.findIndex(data => data.username === username);

  // If the user data exists, update it; otherwise, add a new entry
  if (index !== -1) {
    // Update the existing entry
    existingUserData[index] = Object.assign(existingUserData[index], { ...userData });
  } else {
    // Add a new entry
    existingUserData.push({ username, ...userData });
  }

  // Save the updated array to local storage
  localStorage.setItem('userData', JSON.stringify(existingUserData));
  console.log('User data saved locally:', { username, userData });

}

// Call loadPage() when the page is loaded
document.addEventListener('DOMContentLoaded', loadPage);


