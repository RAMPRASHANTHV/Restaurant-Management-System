// Login form handling
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve stored username and password from localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    // Mark the user as logged in
    localStorage.setItem('loggedIn', 'true');

    // Redirect to the uploaded mainpage.html
    window.location.href = 'mainpage.html'; // Ensure this matches the file name
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
