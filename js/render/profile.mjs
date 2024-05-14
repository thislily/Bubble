import { fetchPosts } from "../api/profile/posts.mjs";
import { fetchProfile } from "../api/profile/read.mjs";

//render profile page info using user name

export function renderProfile(userName) {
  const bannerImg = document.querySelector("#banner-img");
  const avatarImg = document.querySelector("#avatar-img");
  const profileName = document.querySelector("#profile-name");
  const profileBio = document.querySelector("#profile-bio");
  const followersCount = document.querySelector("#followers-count");
  const followingCount = document.querySelector("#following-count");
  const postsCount = document.querySelector("#posts-count");
  const editProfileLink = document.querySelector("#edit-profile-link");

    bannerImg.src = userName.data.banner.url;
    bannerImg.alt = userName.data.banner.alt;
    avatarImg.src = userName.data.avatar.url;
    avatarImg.alt = userName.data.avatar.alt;

    followersCount.textContent = userName.data._count.followers;
    followingCount.textContent = userName.data._count.following;
    postsCount.textContent = userName.data._count.posts;
    
    const nameH1 = document.createElement("h1");
    nameH1.textContent = "@" + userName.data.name;
    profileName.appendChild(nameH1);

    const bioP = document.createElement("p");
    if (userName.data.bio === null) {
      userName.data.bio = "This user has not added a bio yet.";
    } else {
      userName.data.bio = userName.data.bio;
    }
    bioP.textContent = userName.data.bio;
    profileBio.appendChild(bioP);

    if (editProfileLink){
      editProfileLink.href = "/profile/edit/index.html?name=" + userName.data.name;
    }


    fetchPosts(userName.data.name);


    
}

export async function displayProfile(userName) {
    const profile = await fetchProfile();
    renderProfile(profile);
    
    }

