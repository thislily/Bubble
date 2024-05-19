import { SOCIAL_URL, headers, PROFILE_URL } from "../auth/constants.mjs";

// fetch profile data from the API
export async function fetchProfile() {
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const userName = queryParams.get('name');

        const getProfile = PROFILE_URL + "/" + userName + "?_posts=true&_followers=true&_following=true";

        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        const response = await fetch(getProfile, {
            method: "GET",
            headers: headers()
        }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch profile: " + response.statusText);
        }

        const profileData = await response.json();
        console.log(profileData);

        const user = {
            name: profileData.name,
            email: profileData.email,
            avatar: profileData.avatar,
            banner: profileData.banner,
            followers: profileData.followers,
            following: profileData.following,
            posts: profileData.posts
        }
        localStorage.setItem("profile", JSON.stringify(user));
        return profileData;
    } catch (error) {
        throw new Error("Error fetching profile: " + error.message);
    }
}
