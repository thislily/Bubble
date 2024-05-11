//render profile page info using local storage data

export function renderProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const bannerImg = document.querySelector("#banner-img");
  const avatarImg = document.querySelector("#avatar-img");
  const profileName = document.querySelector("#profile-name");
  const profileBio = document.querySelector("#profile-bio");

    bannerImg.src = profile.banner.url;
    bannerImg.alt = profile.banner.alt;
    avatarImg.src = profile.avatar.url;
    avatarImg.alt = profile.avatar.alt;
    
    const nameH1 = document.createElement("h1");
    nameH1.textContent = profile.name;
    profileName.appendChild(nameH1);

    const bioP = document.createElement("p");
    bioP.textContent = profile.bio;
    profileBio.appendChild(bioP);
}
