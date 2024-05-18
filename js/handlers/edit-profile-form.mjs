//handle edit profile form

import { editProfile } from "../api/profile/update.mjs";
import { backToProfileButton } from "./backToProfileButton.mjs";

export const editProfileForm = document.getElementById("edit-profile-form");

// handle the edit profile form submission
export function handleEditProfileForm() {
  editProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // get the current profile data from local storage
    const currentProfileStr = localStorage.getItem("profile");
    const currentProfile = currentProfileStr
      ? JSON.parse(currentProfileStr)
      : {};

    // create an object to store the updated profile data
    const profile = {};

    //prevent empty values from overwriting existing values
    if (editProfileForm.avatar.value) {
      profile.avatar = editProfileForm.avatar.value;
    } else {
      profile.avatar = currentProfile.avatar;
    }

    //prevent empty values from overwriting existing values
    if (editProfileForm.banner.value) {
      profile.banner = editProfileForm.banner.value;
    } else {
      profile.banner = currentProfile.banner;
    }

    editProfile(profile);
  });
}
