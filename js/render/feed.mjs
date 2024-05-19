import { fetchAllPosts } from "../api/posts/read.mjs";
import { postTemplate } from "./templates/postTemplate.mjs";

export async function displayFeed() {

    const feed = document.getElementById("feed");
    const filterValue = document.getElementById("filter-posts").value; // Get the selected filter option

    let posts;
    try {
        posts = await fetchAllPosts(filterValue); // Fetch posts based on filter
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return; // Exit the function if there is a fetching error
    }

    let filteredPosts = posts;
    if (filterValue === "1") {
        // Filter out posts that contain 'test' or 'example'
        filteredPosts = posts.filter(post =>
            (!post.title || !post.body ||
             (!post.title.toLowerCase().includes("test") && !post.title.toLowerCase().includes("example") &&
              !post.body.toLowerCase().includes("test") && !post.body.toLowerCase().includes("example")))
        );
    } else if (filterValue === "2") {
        if (posts.length === 0) {
            const noFriendsYet = document.createElement("p");
            noFriendsYet.textContent = "Oops! Looks like you don't have any friends yet. Follow users to see their posts!";
            noFriendsYet.classList.add("text-center", "text-muted", "px-5");
            feed.innerHTML = '';
            feed.appendChild(noFriendsYet);
            return;
        }
    }
     else if (filterValue === "3") {
        // For now assuming filter 3 is "Show me something new" meaning posts from non-followed users
        const following = new Set(/* Assuming you have a list or set of user IDs the logged-in user follows */);
        filteredPosts = posts.filter(post => post.author.name && !following.has(post.author.name));
    }

    feed.innerHTML = ''; // Clear existing posts

    // Append filtered posts to the feed
    filteredPosts.forEach(post => {
        feed.appendChild(postTemplate(post));
    });

    console.log("Posts filtered and displayed:", filteredPosts);
}



export const filterPosts = document.getElementById("filter-posts");

export function handleFilterPostsSelector() {
    filterPosts.addEventListener("change", displayFeed);
}
