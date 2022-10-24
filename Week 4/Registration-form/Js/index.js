const myForm = document.getElementById("theform");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

myForm.addEventListener("submit" , function(e){
    e.preventDefault();

    let validFname = checkFname(),
    validLname = checkLname(),
    validEmail = checkEmail(),
    validPassword = checkPassword();

    let formValidation = validFname && validLname && validEmail && validPassword;
    if(formValidation) {

    }

});

const isRequired = value => value === "" ? false : true ;

const showError = (input , message) => {

    const theParent = input.parentElement;
    theParent.classList.add("error");
    theParent.classList.remove("success");

    const theMessage = theParent.querySelector("small");
    theMessage.innerHTML = message;

    const theIcon = theParent.querySelector("i");
    theIcon.style.display = "block";
};
const showSuccess = (input) => {

    const theParent = input.parentElement;
    theParent.classList.remove("error");
    theParent.classList.add("success");

    const theMessage = theParent.querySelector("small");
    theMessage.innerHTML = "";

    const theIcon = theParent.querySelector("i");
    theIcon.style.display = "none";
};

const checkFname = () => {
    let valid = false;
    const fnameValue = fnameInput.value.trim();

    if(!isRequired(fnameValue)){
        showError(fnameInput , "First Name cannot be empty");
    }else{
        showSuccess(fnameInput);
        valid = true;
    }
    return valid;
};

const checkLname = () => {
    let valid = false;
    const lnameValue = lnameInput.value.trim();

    if(!isRequired(lnameValue)){
        showError(lnameInput , "Last Name cannot be empty");
    }else{
        showSuccess(lnameInput);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailValue = emailInput.value.trim();

    if(!isRequired(emailValue)){
          showError(emailInput , "Email cannot be empty");
    }else{
        showSuccess(emailInput);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const passwordValue = password.value.trim();

    if(!isRequired(passwordValue)){
        showError(passwordInput , "Password cannot be empty");
    }else{
        showSuccess(passwordInput);
        valid = true;
    }
    return valid;
}