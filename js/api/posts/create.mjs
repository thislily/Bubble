

//create a new post

export async function createPost(post) {
    const response = await fetch(POSTS_URL, {
        method: "POST",
        body: JSON.stringify(post),
        headers: headers(),
    });
    console.log(response);
    return response.json();
}