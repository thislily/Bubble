import { registerUser } from "../api/auth/register.mjs";

export const regForm = document.querySelector("#register-form");
//register user

export function handleRegForm() {
  regForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(regForm);
    const profile = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    //   bio: formData.get("bio"),
    //   avatar: {
    //     url: formData.get("avatarURL"),
    //     alt: formData.get("avatarAlt"),
    //   },
    //   banner: {
    //     url: formData.get("bannerURL"),
    //     alt: formData.get("bannerAlt"),
    //   },
    };
    console.log(profile);
    registerUser(profile);
  });
}
