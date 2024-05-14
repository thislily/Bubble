import { createPost } from "../api/posts/index.mjs";

//handle create post form
export function handleCreatePostForm() {
  const form = document.getElementById("create-post-form");
  console.log(form);
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      console.log(form);
      const formData = new FormData(form);
      console.log(formData);
      const post = Object.fromEntries(formData.entries());
      console.log(post);

      //send to API
      createPost(post);
    });
  }
}