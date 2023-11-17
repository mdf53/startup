function registerUser() {
  console.log('In registerUser()');

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

   // Retrieve existing user credentials or initialize an empty array
  const existingUserCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];

  // Check if the username already exists
  if (Array.isArray(existingUserCredentials) && existingUserCredentials.some(user => user.username === username)) {
    console.log("User already exists.");
    return;
  }

  const userCredential = {
    username: username,
    password: password,
  };

  existingUserCredentials.push(userCredential);

  localStorage.setItem('userCredentials', JSON.stringify(existingUserCredentials));

  console.log('User registered:', userCredential);
  
  // Perform registration logic (call your registerUser function)
  // registerUser(username, password);
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




function getUserByUsername(username) {
  const userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];

  // Check if userCredentials is an array
  if (Array.isArray(userCredentials)) {
    const foundUser = userCredentials.find(user => user.username === username);

    return foundUser || null; // Return found user or null if not found
  } else {
    return null; // or handle the case where userCredentials is not an array
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

