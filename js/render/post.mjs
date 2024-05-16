import { postTemplate } from "./templates/postTemplate.mjs";
import { fetchPostById } from "../api/posts/read.mjs";

// render a post by ID
export function renderPost(post) {
    const profilePostById = document.querySelector("#profile-post-by-id");
    if (!profilePostById) {
        console.error("No element found to render the post into");
        return;
    }

    let postElement = postTemplate(post); // ensure postTemplate correctly handles the post data

    profilePostById.innerHTML = ''; // clear previous contents
    profilePostById.appendChild(postElement);
    console.log("Post rendered:", postElement);
}

// display a post by ID based on the current URL
export async function displayPost() {
    try {
        const post = await fetchPostById();  // fetch the post by ID
        if (post) {
            renderPost(post);  // render the fetched post
            console.log("Post data:", post);
        } else {
            console.log("No post data returned");
        }
    } catch (error) {
        console.error("Failed to fetch or render post:", error);
    }
}



