document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Get references to form elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const createAccountLink = document.getElementById('createAccountLink');

    // Add event listener to the login button
    loginButton.addEventListener('click', function () {
        // Remove previous error styles
        usernameInput.classList.remove('error');
        passwordInput.classList.remove('error');

        // Validate required fields
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Please fill in all required fields.');
            // Add error styles
            if (usernameInput.value.trim() === '') {
                usernameInput.classList.add('error');
            }
            if (passwordInput.value.trim() === '') {
                passwordInput.classList.add('error');
            }
            return;
        }

        // Validate character minimum
        if (usernameInput.value.length < 3 || passwordInput.value.length < 6) {
            alert('Username must be at least 3 characters, and password must be at least 6 characters.');
            // Add error styles
            if (usernameInput.value.length < 3) {
                usernameInput.classList.add('error');
            }
            if (passwordInput.value.length < 6) {
                passwordInput.classList.add('error');
            }
            return;
        }

        // Perform your login logic here (e.g., send a request to the server)
        // For simplicity, let's just log the values for now
        console.log(`Username: ${usernameInput.value}, Password: ${passwordInput.value}`);
    });

    // Add event listener to the create account link (you can add functionality as needed)
    createAccountLink.addEventListener('click', function () {
        alert('Redirect to create account page or perform other actions for account creation.');
    });
});