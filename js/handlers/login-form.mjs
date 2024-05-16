import { loginUser } from "../api/auth/login.mjs";


export const loginForm = document.querySelector("#login-form");

// handle login form submission
export function handleLoginForm() {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const profile = {
      email: loginForm.email.value,
      password: loginForm.password.value,
    };

    console.log(profile);
    loginUser(profile);
  });
}
