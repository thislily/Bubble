const loginWidget = document.getElementById("login-user");
const registerWidget = document.getElementById("register-user");
const registerHereButton = document.getElementById("register-here");
const loginHereButton = document.getElementById("login-here");
const loginContainer = document.getElementById("login-container");

//view registration form
function viewRegistrationForm() {
  registerWidget.classList.remove("visually-hidden");
  loginWidget.classList.add("visually-hidden");
  registerHereButton.classList.add("visually-hidden");
  loginHereButton.classList.remove("visually-hidden");
  loginContainer.classList.remove("mt-5");
  loginContainer.classList.add("mt-0");
}

//view login form
function viewLoginForm() {
  registerWidget.classList.add("visually-hidden");
  loginWidget.classList.remove("visually-hidden");
  registerHereButton.classList.remove("visually-hidden");
  loginHereButton.classList.add("visually-hidden");
  loginContainer.classList.remove("mt-0");
  loginContainer.classList.add("mt-5");
}

export function viewForms() {
  registerHereButton.addEventListener("click", viewRegistrationForm);
  loginHereButton.addEventListener("click", viewLoginForm);
}
