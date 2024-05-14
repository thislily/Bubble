import { updatePost } from "../api/posts/index.mjs";

//handle update post form
export function handleUpdatePostForm(){
    const form = document.getElementById("update-post-form");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    
    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;
            
            //send to API
            updatePost(postId, post);
        });
    };
}