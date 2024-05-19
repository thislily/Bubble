import { POSTS_URL,PROFILE_URL, headers } from "../auth/constants.mjs";

// fetch a post by id from the api
export async function fetchPostById() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const getPost = POSTS_URL + "/" + id + "?_author=true&_reactions=true&_comments=true";
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Authorization token not found.");
    }

    const response = await fetch(getPost, {
        method: "GET",
        headers: headers()
    });

    if (!response.ok) {
        throw new Error("Failed to fetch post: " + response.statusText);
    }

    const postData = await response.json();
    console.log(postData);
    return postData;
}

// Function to fetch all posts or posts from following based on the filter
export async function fetchAllPosts(filterValue) {


    let url = POSTS_URL + "/?_author=true&_reactions=true&_comments=true";
    if (filterValue === "2") {
        url = POSTS_URL + `/following/?_author=true&_reactions=true&_comments=true`; // Use the following-specific endpoint
    }

    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Authorization token not found.");
    }

    const response = await fetch(url, {
        method: "GET",
        headers: headers()
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts: " + response.statusText);
    }
    return response.json();
}
