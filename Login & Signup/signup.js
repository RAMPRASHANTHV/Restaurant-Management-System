// Signup form handling
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Save username and password to localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert('Signup successful! Please log in.');
  window.location.href = 'login.html'; // Redirect to login page
});
