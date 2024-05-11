import { loginUser } from "../auth/login.mjs";

//login user
export const loginForm = document.querySelector("#login-form");

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
