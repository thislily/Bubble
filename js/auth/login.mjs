
import { LOGIN_URL } from "../auth/constants.mjs";
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
    console.log(userData.data);

    if (userData.data) {
        localStorage.setItem("token", userData.data.accessToken);
        const user = {
            name: userData.data.name,
            email: userData.data.email,
            avatar: {
                url: userData.data.avatar.url,
                alt: userData.data.avatar.alt,
            },
            banner: {
                url: userData.data.banner.url,
                alt: userData.data.banner.alt,
            },
            bio: userData.data.bio,
        }
        localStorage.setItem("profile", JSON.stringify(user));

        window.location.href = "/profile/index.html";
    } else {
        alert("Invalid login details");
    }

}