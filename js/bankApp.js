document.getElementById('log-in').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if (password === 'admin' && email === 'jp@gmail.com') {
        window.location.href = 'bankinside.html';
    }
    else {
        window.location.href = 'index.html';
    }
})