import { createPost } from "../api/posts/createPost.mjs";
import { displayProfile } from "../render/profile.mjs";

//handle create post form
export function handleCreatePostForm() {


const form = document.getElementById("create-post-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const post = {
        title: form.title.value,
        body: form.body.value,
        media: form.media.value,
      };
      
      console.log(post);

      //send to API
      createPost(post);

      window.location.reload();
    });
  
}