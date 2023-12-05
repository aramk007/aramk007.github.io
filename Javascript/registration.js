document.addEventListener('DOMContentLoaded', function () {
    const registerModal = document.getElementById('registerModal');
    const openRegisterModalLink = document.getElementById('openRegisterModalLink');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    
    const registerForm = document.getElementById('registerForm');
    const registerButton = document.getElementById('registerButton');

    openRegisterModalLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        registerModal.style.display = 'block';
        registerContent.classList.remove('show'); // Remove the 'show' class to hide the modal content
    });

    closeRegisterModal.addEventListener('click', function () {
        registerModal.style.display = 'none';
        registerContent.classList.remove('show'); // Remove the 'show' class to hide the modal content
    });

    registerButton.addEventListener('click', function () {
        const registerUsernameInput = document.getElementById('registerUsername');
        const registerPasswordInput = document.getElementById('registerPassword');

        const registerUsername = registerUsernameInput.value;
        const registerPassword = registerPasswordInput.value;

        // Validate username
        if (registerUsername.length < 3) {
            alert('Username must be at least 3 characters long');
            registerUsernameInput.classList.add('error'); // Add red border
            return;
        }

        // Validate password
        if (registerPassword.length < 6) {
            alert('Password must be at least 6 characters long');
            registerPasswordInput.classList.add('error'); // Add red border
            return;
        }

        // Perform your user registration logic here (e.g., send a request to the server)
        // For simplicity, let's just log the values for now
        console.log(`Register - Username: ${registerUsername}, Password: ${registerPassword}`);
        
        // Close the modal after registration (you may want to handle this differently in a real application)
        registerModal.style.display = 'none';
        registerContent.classList.remove('show'); // Remove the 'show' class to hide the modal content
    });
});
