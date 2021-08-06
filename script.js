const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// For error messages,
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";

    const small = document.querySelector("small");
    small.innerText = message;
}
// For error messages email //////////////////////////////////
function showErrorEmail(f, message) {
    const formControl = f.parentElement;
    formControl.className = "form-control error";
    const small = document.querySelector(".email-error-message");
    small.innerText = message;
}
function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function showError2(e2, m2) {
    const formControl = e2.parentElement;
    formControl.className = "form-control error";
    const small = document.querySelector(".email-error-message");
    small.innerText = m2;
}
// For error messages password //////////////////////////////////
function showErrorPassword(p, m) {
    const formControl = p.parentElement;
    formControl.className = "form-control error";
    const small = document.querySelector(".password-error-message");
    small.innerText = m;
}
// For error messages password //////////////////////////////////
function showErrorPassword(p, m) {
    const formControl = p.parentElement;
    formControl.className = "form-control error";
    const small = document.querySelector(".password-error-message");
    small.innerText = m;
}
function lengthError(le2, m3) {
    const formControl = le2.parentElement;
    formControl.className = "form-control error";
    const small = document.querySelector(".password-error-message");
    small.innerText = m3;
}

// For error messages password2 //////////////////////////////////
function showErrorPassword2(p2, m) {
    const formControl = p2.parentElement;
    formControl.className = "form-control error";
    const small = document.querySelector(".password2-error-message");
    small.innerText = m;
}
// For Right Username, email and password///

function showSuccess(i) {
    const formControl = i.parentElement;
    formControl.className = "form-control success";
}

//add event handlers for Username
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log(username.value);

    // For Username//
    if (username.value === "") {
        alert("Please enter a username");
        showError(username, "User Name is required");
    } else {
        showSuccess(username);
    }

    // For email //

    if (email.value === "") {
        alert("Please enter a Email");
        showErrorEmail(email, "User Email is required");
    } else if (!validateEmail(email.value)) {
        showError2(email, "Invalid Email");
    } else {
        showSuccess(email);
    }

    // For password //
    var length = 7;
    if (password.value === "") {
        alert("Please enter a valid Password");
        showErrorPassword(password, "Please Enter a valid Password");
    } else if (password.value.length > length) {
        lengthError(password, "Please use 7 character for your password");
    } else {
        showSuccess(password);
    }
    // For password2 //

    if (password2.value != password.value) {
        alert("Please enter a valid Password");
        showErrorPassword2(password2, "Enter again your Password");
    } else {
        //showSuccess(password2);
    }
});
