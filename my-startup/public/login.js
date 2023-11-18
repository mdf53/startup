//new function for startup login
async function registerUser() {
  // Get the username and password from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the user already exists in the database
  const existingUser = await getUserByUsername(username);

  if (existingUser) {
    console.log("User already exists.");
    return;
  }

  // If the user doesn't exist, proceed with registration logic
  try {
    // Perform registration logic
    // ...

    console.log('User registered:', { username, password });

    // Perform additional actions after registration if needed
  } catch (error) {
    console.error('Error registering user:', error);
  }
}

//new function for startup login
async function loginUser() {
  // Get the username and password from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Get the user data from the server
  const user = await getUserByUsername(username);

  // Check if the user exists and the password is correct
  if (user && user.password === password && user.username === username) {
    localStorage.setItem('loggedInUser', user.username);
    console.log("Login successful.");
    window.location.href = "religions.html";
    // Perform additional actions after login if needed
  } else {
    console.log("Invalid username or password.");
  }
}

function saveUserCredentialsToLocal(username, password) {
  const userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];

  // Create a new user object
  const newUserCredentials = {
    username: username,
    password: password,
  };

  // Add the new user to the existing array
  userCredentials.push(newUserCredentials);

  // Save the updated array to local storage
  localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
}

function saveUserCredentialsToServer(username, password) {
  // Send a POST request to your server endpoint to store user credentials
  fetch('/api/store-user-credentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('User credentials stored on the server:', data);
    })
    .catch(error => {
      console.error('Error storing user credentials on the server:', error);
    });
}

//new function for startup login
async function getUserByUsername(username) {
  try {
    // Send a GET request to your server endpoint to retrieve user data
    const response = await fetch(`/api/get-user-by-username?username=${encodeURIComponent(username)}`);
    
    if (!response.ok) {
      // Handle the error if the response status is not OK
      throw new Error(`Failed to get user data: ${response.statusText}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error getting user data from the server:', error);
    return null;
  }
}

function saveUserToLocalstorage(user) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}


function User(username, password) {
  this.username = username;
  this.password = password;
}