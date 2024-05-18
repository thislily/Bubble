import { fetchAllPosts } from "../api/posts/read.mjs";
import {postTemplate} from "./templates/postTemplate.mjs";

// render all posts to the feed using the post template

export async function displayFeed() {
    const posts = await fetchAllPosts();
    const feed = document.getElementById("feed");
    const profileNamePost = document.getElementById("profile-name-post");
    const avatarImgPost = document.getElementById("avatar-img-post");
    const profile = localStorage.getItem("profile");
    const user = JSON.parse(profile);
    const userName = user.name;
    const userAvatar = user.avatar;

    if (profileNamePost) {
        profileNamePost.textContent = userName;
    }

    if (avatarImgPost) {
        avatarImgPost.src = userAvatar;
    }

    posts.forEach(post => {
        feed.appendChild(postTemplate(post));
    });
}

