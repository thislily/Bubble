import { POSTS_URL, headers } from "../auth/constants.mjs";

// fetch a post by id from the api
export async function fetchPostById() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const getPost = POSTS_URL + "/" + id;
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