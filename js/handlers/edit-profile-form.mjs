//handle edit profile form

import { editProfile } from "../api/profile/update.mjs";

export const editProfileForm = document.getElementById("edit-profile-form");

export function handleEditProfileForm() {
    editProfileForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve current profile data from local storage
        const currentProfileStr = localStorage.getItem('profile');
        const currentProfile = currentProfileStr ? JSON.parse(currentProfileStr) : {};

        // Initialize the profile object to be submitted
        const profile = {};

        // Check if the form's avatar value is empty
        if (editProfileForm.avatar.value) {
            profile.avatar = editProfileForm.avatar.value;
        } else {
            // If empty, use existing value from local storage
            profile.avatar = currentProfile.avatar;
        }

        // Check if the form's banner value is empty
        if (editProfileForm.banner.value) {
            profile.banner = editProfileForm.banner.value;
        } else {
            // If empty, use existing value from local storage
            profile.banner = currentProfile.banner;
        }

        console.log("Updated profile data to submit:", profile);
        editProfile(profile);
    });
}
