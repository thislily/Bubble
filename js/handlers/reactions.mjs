import { addReaction } from "../api/posts/reactions.mjs";

//on click of the reaction button, the reaction is added to the post

export function handleReactionButton() {

   const heart = document.querySelectorAll(".heart");

    heart.forEach((button) => {
        button.addEventListener("click", async (e) => {
            const postId = e.target.closest(".card").id;
            const reaction = e.target.id;
            const post = {
                symbol: "👍",
                postId: postId,

            };
            await addReaction(post);
        });
    });
}