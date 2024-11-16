// Check if the user is logged in
function checkLogin() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      alert('You must be logged in to access this page.');
      window.location.href = 'login.html'; // Redirect to the login page
    }
  }
  
  // Logout functionality
  function logoutUser() {
    localStorage.removeItem('loggedIn'); // Clear login status
    window.location.href = 'login.html'; // Redirect to the login page
  }
  