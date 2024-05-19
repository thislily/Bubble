
import { LOGIN_URL } from "../auth/constants.mjs";
import { headers } from "../auth/constants.mjs";

//login user with the profile data
export async function loginUser(profile) {
    const response = await fetch(LOGIN_URL , {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let userData = await response.json();
    console.log(userData);

    //if the user is logged in, save the token and profile data
    if (userData) {
        localStorage.setItem("token", userData.accessToken);
        const user = {
            name: userData.name,
            email: userData.email,
            avatar: userData.avatar,
            banner: userData.banner,
            followers: userData.followers,
            following: userData.following,
            posts: userData.posts
        }
        localStorage.setItem("profile", JSON.stringify(user));

        //redirect to the profile page
        window.location.href = "/profile/index.html" + "?name=" + user.name;
    } else {
        console.error(userData);
    }

}