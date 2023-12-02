async function registerUser() {
  console.log('In registerUser()');

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Check if the user already exists
    const existingUser = await getUserByUsername(username);

    if (existingUser && existingUser.username === username) {
      console.log("User already exists.");
      return;
    }

    // If the user doesn't exist, proceed with registration
    const userCredentials = {
      username: username,
      password: password,
    };

    const newUserData = {
      username: username,
      Christianity: checked = false,
      LDS: checked = false,
      Islam: checked = false,
      Hinduism: checked = false
    }

    // Save user credentials to the server and local storage
    await saveUserCredentialsToServer(userCredentials);
    await updateUserDataOnServer(username, newUserData);

    localStorage.setItem('loggedInUser', username);


    console.log('User registered:', userCredentials);
    loginUser();
    // Perform additional registration logic if needed
  } catch (error) {
    console.error('Error during registration:', error);
    // Handle the error, such as displaying an error message to the user
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

async function saveUserCredentialsToServer(userCredentials) {
  try {
    const response = await fetch('/api/store-user-credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    });

    const data = await response.json();
    console.log('Response from server:', data);
  } catch (error) {
    console.error('Error saving user credentials to the server:', error);
    // Handle the error, such as displaying an error message to the user
  }
}

async function getUserByUsername(username) {
  try {
    // Send a GET request to your server endpoint to retrieve user data
    const response = await fetch(`/api/get-user-by-username?username=${encodeURIComponent(username)}`);
    
    if (!response.ok) {
      // Handle the error if the response status is not OK
      // throw new Error(`Failed to get user data: ${response.statusText}`);
      return null;
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