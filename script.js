// JavaScript for handling login, signup, and modal display
document.addEventListener('DOMContentLoaded', () => {
    const authModal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Open the modal for login
    document.querySelector('.user-account img').addEventListener('click', () => {
        authModal.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    // Close modal
    closeBtn.onclick = function () {
        authModal.style.display = 'none';
    }

    // Show signup form
    showSignup.onclick = function (event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    // Show login form
    showLogin.onclick = function (event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    // Handle login
    loginBtn.onclick = function () {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            authModal.style.display = 'none';
        } else {
            alert('Invalid credentials!');
        }
    }

    // Handle signup
    signupBtn.onclick = function () {
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (username && email && password) {
            alert('Signup successful!');
            authModal.style.display = 'none';
        } else {
            alert('Please fill out all fields.');
        }
    }

    // Handle logout
    logoutBtn.onclick = function () {
        alert('Logged out successfully!');
    }
});

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const authModal = document.getElementById('authModal');
    if (event.target === authModal) {
        authModal.style.display = 'none';
    }
}
