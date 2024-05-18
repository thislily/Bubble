 // add a back to profile link
export function backToProfileButton(post) {   
    const profilePostById = document.querySelector("#profile-post-by-id");
    const backToProfile = document.querySelector("#back-to-profile");
    let profile = localStorage.getItem("profile");
    profile = JSON.parse(profile);
    
   if (backToProfile) {
    if (post && post._author) {
        backToProfile.href = `/profile/index.html?name=${post._author.name}`;
      } else {
        backToProfile.href = `/profile/index.html?name=${profile.name}`;
      }
   }

    }