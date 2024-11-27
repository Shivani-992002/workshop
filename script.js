document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        
        return;
    }

    // Simulate storing the user data (in a real app, this would be saved to a database)
    localStorage.setItem('userData', JSON.stringify({ username, email, location, contact, password }));

    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (userData && userData.username === username && userData.password === password) {
        alert(`Welcome, ${username}!`);
        // Redirect or show a welcome message
    } else {
        alert('Invalid username or password!');
    }
});
