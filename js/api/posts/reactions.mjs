import { POSTS_URL, headers } from "../auth/constants.mjs";

//send reaction to the api 

export async function addReaction(post) {
    const response = await fetch(POSTS_URL + `/${post.postId}/react/👍`, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: headers(),
    });
    
    const data = await response.json();
    return data;
    }