import { SOCIAL_URL, headers, PROFILE_URL } from "../auth/constants.mjs";

// fetch profile data from the API
export async function fetchProfile() {
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const userName = queryParams.get('name');

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
        return profileData;
    } catch (error) {
        throw new Error("Error fetching profile: " + error.message);
    }
}
