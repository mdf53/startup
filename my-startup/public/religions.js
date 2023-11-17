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
  const item1 = document.getElementById('Christianity').checked;
  const item2 = document.getElementById('LDS').checked;
  const item3 = document.getElementById('Islam').checked;
  const item4 = document.getElementById('Hinduism').checked;

  // Add more lines for additional checkboxes
  let existingUserData = JSON.parse(localStorage.getItem('userData')) || [];



  const newUserData = {
    username: loggedInUser,
    item1: item1,
    item2: item2,
    item3: item3,
    item4: item4
    // Add more properties for additional checkboxes
  };

  existingUserData.push(newUserData);

  // Save the updated data to local storage
  localStorage.setItem('userData', JSON.stringify(existingUserData));

  console.log('User data updated:', newUserData);
}

// Helper function to get user data by username
function getUserByUsername(username) {
  const userD = JSON.parse(localStorage.getItem('userData')) || [];

  // Find the user in the array by username
  return userD.find(user => user.username === username) || null;
}

// Call loadPage() when the page is loaded
document.addEventListener('DOMContentLoaded', loadPage);


