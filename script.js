const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const submitBtn = document.querySelector(".submit-btn");

// Function to chech the email is correct or not...
function isEmail(emailVal) {
  if (!emailVal.includes("@")) return false;
  if (!emailVal.includes(".")) return false;
  if (emailVal.startsWith("@") || emailVal.endsWith("@")) return false;
  if (emailVal.startsWith(".") || emailVal.endsWith(".")) return false;
  if (
    emailVal.indexOf(".") == emailVal.indexOf("@") + 1 ||
    emailVal.indexOf(".") == emailVal.indexOf("@") - 1
  )
    return false;
  return true;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswrodVal = cpassword.value.trim();

  // validating that the usename is valid or not
  if (usernameVal === "") {
    errorMsg(username, "Username must not be empty");
  } else if (usernameVal.length <= 3) {
    errorMsg(username, "Username must contain characters greater than 3");
  } else {
    successMsg(username);
  }

  // validating that the email is valid or not
  if (emailVal === "") {
    errorMsg(email, "Email must not be empty");
  } else if (!isEmail(emailVal)) {
    errorMsg(email, "Not a valid email");
  } else {
    successMsg(email);
  }

  // validating that the phone number is valid or not
  if (phoneVal === "") {
    errorMsg(phone, "Phone number must not be empty");
  } else if (phoneVal.length != 10) {
    errorMsg(phone, "Phone number must contain 10 numbers");
  } else {
    successMsg(phone);
  }

  // validating that the password is valid or not
  if (passwordVal === "") {
    errorMsg(password, "Password must not be empty");
  } else if (passwordVal.length <= 7) {
    errorMsg(password, "Password must contain atleast 8 characters");
  } else {
    successMsg(password);
  }

  // validating that the password is valid or not
  if (cpasswrodVal === "") {
    errorMsg(cpassword, "Password must not be empty");
  } else if (passwordVal.length <= 7) {
    errorMsg(password, "Password must contain atleast 8 characters");
  } else if (cpasswrodVal !== passwordVal) {
    errorMsg(cpassword, "Password does not match");
  } else {
    successMsg(cpassword);
  }

  if (
    isSuccess(username) &&
    isSuccess(email) &&
    isSuccess(phone) &&
    isSuccess(password) &&
    isSuccess(cpassword)
  ) {
    // If all validations pass, show the 'Welcome' alert
    const display = document.querySelector('.display')
    display.style.scale = 1
    display.innerHTML = `Welcome ${username.value}`
  }
}

function errorMsg(input, message) {
  const formControl = input.parentNode;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  formControl.style.animation = 'error 0.4s ease'
  setTimeout(() => {
  formControl.style.animation = 'none'
  }, 500);
}

function successMsg(input) {
  const formControl = input.parentNode;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}


function isSuccess(input) {
  const formControl = input.parentNode;
  return formControl.classList.contains("success");
}