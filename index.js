const displayMessage = (message, isError = false) => {
    const messageContainer = document.getElementById('messageContainer');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    if (isError) {
        messageElement.classList.add('error');
    } else {
        messageElement.classList.add('success');
    }
    messageContainer.appendChild(messageElement);
}

const formData = (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let password = document.querySelector("#Password").value.trim();
    let email = document.querySelector("#email").value.trim();

    // Check if any field is empty
    if (name === '' || password === '' || email === '') {
        displayMessage("Please fill in all fields", true);
        return;
    }

    var regularname = /^[a-zA-Z]+$/;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var regularemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regularname.test(name)) {
        displayMessage("Incorrect name", true);
        return;
    } else {
        displayMessage("Correct name");
    }

    if (!regularExpression.test(password)) {
        displayMessage("Password format is incorrect", true);
        return;
    } else {
        displayMessage("Password format is correct");
    }

    if (!regularemail.test(email)) {
        displayMessage("Email format is incorrect", true);
        return;
    } else {
        displayMessage("Email format is correct");
    }
}

document.getElementById("data").addEventListener("submit", formData);
