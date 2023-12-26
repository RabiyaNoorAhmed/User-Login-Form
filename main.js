const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Add Event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
})
// send data
const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        alert("Login Successful");
        location.href = `home.html?username=${usernameVal}`
    }
}


// final validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i;
            sendData(usernameVal, sRate, count);
        } else {
            return false;
        }

    }
}

// validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    // validation username
    if (usernameVal === "") {
        setErrorMsg(username, 'Please Enter Your Username');
    } else if (usernameVal.length <= 5) {
        setErrorMsg(username, 'Username must be at least 6 characters long');
    } else {
        setSuccessMsg(username);
    }
    // validation password
    if (passwordVal === "") {
        setErrorMsg(password, 'Please Enter Your Password');
    } else if (passwordVal.length <= 6) {
        setErrorMsg(password, 'Password must be at least 8 characters long');
    } else {
        setSuccessMsg(password);
    }

    successMsg(usernameVal);
};

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
};




