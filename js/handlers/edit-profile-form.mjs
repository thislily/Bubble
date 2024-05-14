//handle edit profile form

import { editProfile } from "../api/profile/update.mjs";

export const editProfileForm = document.getElementById("edit-profile-form");

export function handleEditProfileForm() {
        editProfileForm.addEventListener("submit",(event) => {
            event.preventDefault();
            const profile = {
                avatar:{
                    alt: editProfileForm.avatarAlt.value,
                    url: editProfileForm.avatarURL.value
                    
                },
                banner:{
                    alt: editProfileForm.bannerAlt.value,
                    url: editProfileForm.bannerURL.value
                    
                },
                bio: editProfileForm.bio.value,
            
            };
            console.log(profile);
            editProfile(profile);
        });
}
