import { headers, POSTS_URL } from "../auth/constants.mjs";

//update a post by id

export async function updatePost(post) {
    const queryParams = new URLSearchParams(window.location.search);
    const postId = queryParams.get('id');
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Authorization token not found.");
    }

    const response = await fetch(POSTS_URL + "/" + postId, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: headers(),
    });

    if (!response.ok) {
        throw new Error("Failed to update post: " + response.statusText);
    }

    const data = await response.json();
    return data;
}