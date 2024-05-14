import { PROFILE_URL, headers } from "../auth/constants.mjs";
// update profile data

export async function editProfile(profile) {
    try {
        const userName = window.location.search.split("=")[1];
        console.log(userName);

        const updateProfile = PROFILE_URL + "/" + userName;
        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("Authorization token not found.");
        }

        const response = await fetch(updateProfile, {
            method: "PUT",
            body: JSON.stringify(profile),
            headers: headers()
        });

        if (!response.ok) {
            throw new Error("Failed to update profile: " + response.statusText);
        }

        const profileData = await response.json();
        console.log(profileData);

        window.location.href = "/profile/index.html" + "?name=" + userName;
        
        return profileData;

        
    }

    catch (error) {
        console.error("Error updating profile:", error.message);
        throw error;
    }
}