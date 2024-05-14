import { SOCIAL_URL, API_KEY, headers, PROFILE_URL } from "../auth/constants.mjs";

// Fetch profile data from the API
export async function fetchProfile() {
    try {
        const userName = window.location.search.split("=")[1];
        console.log(userName);

        const getProfile = PROFILE_URL + "/" + userName;

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
        return profileData;
    } catch (error) {
        console.error("Error fetching profile:", error.message);
        throw error;
    }
}
