import { registerUser } from "../auth/register.mjs";

//register user

export function handleRegForm () {
    const regForm = document.querySelector("#register-form");

    regForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const formData = new FormData(regForm);
        const profile = {
            name: formData.get("name"),
            email: formData.get("email"),
            avatar: formData.get("avatar"),
            banner: formData.get("banner"),
            password: formData.get("password")
        };
        console.log(profile);
        registerUser(profile);

    });
}