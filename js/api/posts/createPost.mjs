import { headers, POSTS_URL } from "../auth/constants.mjs";

//create a new post

export async function createPost(post) {
    const response = await fetch(POSTS_URL, {
        method: "POST",
        body: JSON.stringify(post),
        headers: headers(),
    });
    console.log(response);

    const data = await response.json();
    console.log(data);
    return data
}