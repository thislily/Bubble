import { POSTS_URL, headers } from "../auth/constants.mjs";

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

// fetch all posts from the api
export async function fetchAllPosts() {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Authorization token not found.");
    }

    const response = await fetch(POSTS_URL + "/?_author=true&_reactions=true&_comments=true", {
        method: "GET",
        headers: headers()
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts: " + response.statusText);
    }

    const postData = await response.json();
    return postData;
}