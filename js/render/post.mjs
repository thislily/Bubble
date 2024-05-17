import { postTemplate } from "./templates/postTemplate.mjs";
import { fetchPostById } from "../api/posts/read.mjs";
import { viewCurrentPostInfo } from "../handlers/update-post.mjs";

// render a post by ID
export function renderPost(post) {
  const profilePostById = document.querySelector("#profile-post-by-id");
  const backToProfile = document.querySelector("#back-to-profile");

  let profile = localStorage.getItem("profile");
  profile = JSON.parse(profile);

  let postElement = postTemplate(post); // ensure postTemplate correctly handles the post data

  // render the post to the profilePostById element
  if (profilePostById) {
    profilePostById.innerHTML = ""; // clear previous contents
    profilePostById.appendChild(postElement);
    console.log("Post rendered:", postElement);

    // add a back to profile link
    backToProfile.classList.add("btn", "btn-primary", "m-auto", "mb-3", "mt-3", "rounded-5",);
    if (post._author) {
      backToProfile.href = `/profile/index.html?name=${post._author.name}`;
    } else {
      backToProfile.href = `/profile/index.html?name=${profile.name}`;
    }
    backToProfile.innerHTML = `<i class="bi bi-arrow-left"></i>  Back to Profile`;

    profilePostById.prepend(backToProfile);
  }
}

// display a post by ID based on the current URL
export async function displayPost() {
  try {
    const post = await fetchPostById(); // fetch the post by ID
    if (post) {
      renderPost(post); // render the fetched post
      viewCurrentPostInfo(post); // view the current post info
      console.log("Post data:", post);
    } else {
      console.log("No post data returned");
    }
  } catch (error) {
    console.error("Failed to fetch or render post:", error);
  }
}
