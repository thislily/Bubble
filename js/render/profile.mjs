import { fetchPosts } from "../api/profile/posts.mjs";
import { fetchProfile } from "../api/profile/read.mjs";
import { profilePostTemplate } from "./templates/postTemplate.mjs";

//render profile page info using user name

export function renderProfile(userName) {
  const bannerImg = document.querySelector("#banner-img");
  const avatarImg = document.querySelector("#avatar-img");
  const avatarImgPost = document.querySelector("#avatar-img-post");
  const profileName = document.querySelector("#profile-name");
  const profileNamePost = document.querySelector("#profile-name-post");
  const profileBio = document.querySelector("#profile-bio");
  const followersCount = document.querySelector("#followers-count");
  const followingCount = document.querySelector("#following-count");
  const postsCount = document.querySelector("#posts-count");
  const editProfileLink = document.querySelector("#edit-profile-link");

  if (userName.banner === "") {
    bannerImg.src = "https://wallpapercave.com/wp/wp12682974.jpg";
  } else {
    bannerImg.src = userName.banner;
  }

  if (userName.avatar === "") {
    avatarImg.src =
      "https://cdn.vectorstock.com/i/500p/52/91/cute-happy-soap-bubble-vector-27845291.jpg";
  } else {
    avatarImg.src = userName.avatar;
  }

  if (avatarImgPost) {
    if (avatarImgPost.src === "") {
      avatarImgPost.src =
        "https://cdn.vectorstock.com/i/500p/52/91/cute-happy-soap-bubble-vector-27845291.jpg";
    } else {
      avatarImgPost.src = userName.avatar;
    }
  }

  followersCount.textContent = userName._count.followers;
  followingCount.textContent = userName._count.following;
  postsCount.textContent = userName._count.posts;

  const nameH1 = document.createElement("h1");
  nameH1.textContent = userName.name;
  profileName.appendChild(nameH1);

  if (profileNamePost) {
    profileNamePost.textContent = userName.name;
  } 

  if (editProfileLink) {
    editProfileLink.href = "/profile/edit/index.html?name=" + userName.name;
  }
 

}


export function renderProfilePosts(posts) {
  const postsContainer = document.querySelector("#profile-post-feed");

  //render each post with the post template from postTemplate.mjs
  if(postsContainer){
    posts.forEach((post) => {
      postsContainer.appendChild(profilePostTemplate(post));
    });
  }

}


export async function displayProfile(userName) {
  const profile = await fetchProfile();
  renderProfile(profile);

  const posts = await fetchPosts(userName);
  renderProfilePosts(posts);
}
