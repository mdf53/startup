// import { db } from '../database.js';
// // const { db } = require('../database');

// async function registerUser() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Check if the username already exists in local storage
//   const existingUser = getUserByUsername(username);

//   if (existingUser) {
//     console.log("User already exists.");
//     return;
//   }

//   // Save user credentials to the server
//   saveUserCredentialsToServer(username, password);

//   // Save user credentials to local storage
//   saveUserCredentialsToLocal(username, password);


//   console.log('User registered:', { username, password });
//   // Perform additional registration logic if needed
// }

// async function loginUser() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   const user = await getUserByUsername(username);

//   if (user && user.password === password && user.username === username) {
//     localStorage.setItem('loggedInUser', user.username);
//     console.log("Login successful.");  
//     window.location.href = "religions.html";
//   } else {
//     console.log("Invalid username or password.");
//   }
// }

// function saveUserCredentialsToLocal(username, password) {
//   const userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];

//   // Create a new user object
//   const newUserCredentials = {
//     username: username,
//     password: password,
//   };

//   // Add the new user to the existing array
//   userCredentials.push(newUserCredentials);

//   // Save the updated array to local storage
//   localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
// }

// function saveUserCredentialsToServer(username, password) {
//   // Send a POST request to your server endpoint to store user credentials
//   fetch('/api/store-user-credentials', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('User credentials stored on the server:', data);
//     })
//     .catch(error => {
//       console.error('Error storing user credentials on the server:', error);
//     });
// }




// async function getUserByUsername(username) {
//   try {
//     const userCredentialsCollection = db.collection('userCredentials');
//     const user = await userCredentialsCollection.findOne({ 'username': username });
//     return user || null;
//   } catch (error) {
//     console.error('Error retrieving user credentials from the database:', error);
//     return null;
//   }
// }


// function saveUserToLocalstorage(user) {
//   const users = JSON.parse(localStorage.getItem('users')) || [];
//   users.push(user);
//   localStorage.setItem('users', JSON.stringify(users));
// }


// function User(username, password) {
//   this.username = username;
//   this.password = password;
// }

function registerUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username already exists in local storage
  const existingUser = getUserByUsername(username);

  if (existingUser) {
    console.log("User already exists.");
    return;
  }

  
  // Save user credentials to the server
  saveUserCredentialsToServer(username, password);

  // Save user credentials to local storage
  saveUserCredentialsToLocal(username, password);


  console.log('User registered:', { username, password });
  // Perform additional registration logic if needed
}

function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const user = getUserByUsername(username);

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




function getUserByUsername(username) {
  const userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];

  // Find the user in the array by username
  return userCredentials.find(user => user.username === username) || null;
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