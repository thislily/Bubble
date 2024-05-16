
import { LOGIN_URL } from "../auth/constants.mjs";
import { headers } from "../auth/constants.mjs";
//send login data to the API

export async function loginUser(profile) {
    const response = await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let userData = await response.json();
    console.log(userData);

    if (userData) {
        localStorage.setItem("token", userData.accessToken);
        const user = {
            name: userData.name,
            email: userData.email,
            avatar: userData.avatar,
            banner: userData.banner
        }
        localStorage.setItem("profile", JSON.stringify(user));

        window.location.href = "/profile/index.html" + "?name=" + user.name;
    } else {
        console.error(userData);
    }

}