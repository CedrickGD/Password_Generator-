function updateLengthDisplay(value) {
    document.getElementById('lengthDisplay').textContent = value;
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const complexity = document.querySelector('input[name="complexity"]:checked').value;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Always include letters for any level
    let password = [];

    if (complexity === "mid") {
        charset += "0123456789";
        password.push(getRandomChar("0123456789")); // Ensure at least one number
    } else if (complexity === "complex") {
        const specialChars = "!@#$%^&*()_+";
        charset += "0123456789" + specialChars;
        password.push(getRandomChar("0123456789")); // Ensure at least one number
        password.push(getRandomChar(specialChars)); // Ensure at least one special character
    }

    // Fill the rest of the password
    while (password.length < length) {
        password.push(getRandomChar(charset));
    }

    // Shuffle the password to avoid predictable patterns
    password = shuffleArray(password);
    document.getElementById('passwordDisplay').textContent = password.join('');
}

function getRandomChar(charset) {
    return charset[Math.floor(Math.random() * charset.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function copyPassword() {
    const password = document.getElementById('passwordDisplay').textContent;
    const copyNotification = document.getElementById('copyNotification');
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            copyNotification.textContent = 'Password copied to clipboard!';
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 4000);
        }).catch(err => {
            copyNotification.textContent = 'Failed to copy password.';
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 4000);
        });
    } else {
        copyNotification.textContent = 'No password to copy. Please generate a password first.';
        copyNotification.classList.add('show');
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 4000);
    }
}

function login() {
    // Placeholder for login functionality
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Attempting login with', username, password);
    // You would typically handle the actual login logic here
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('notification').textContent = 'Registration successful!';
        document.getElementById('notification').classList.add('show');
        setTimeout(() => {
            document.getElementById('notification').classList.remove('show');
        }, 4000);
    } else {
        document.getElementById('notification').textContent = 'Please fill all fields!';
        document.getElementById('notification').classList.add('show');
        setTimeout(() => {
            document.getElementById('notification').classList.remove('show');
        }, 4000);
    }
}

function updateLengthDisplay(value) {
    // If you have a password length slider elsewhere, it might use this
    document.getElementById('lengthDisplay').textContent = value;
}
