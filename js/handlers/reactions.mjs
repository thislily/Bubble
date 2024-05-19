import { addReaction } from "../api/reactions.mjs";

//on click of the reaction button, the reaction is added to the post

export function handleReactionButton() {
    const reactionButtons = document.querySelectorAll(".reaction-button");
    reactionButtons.forEach((button) => {
        button.addEventListener("click", async (e) => {
            const postId = e.target.closest(".card").id;
            const reaction = e.target.id;
            const post = {
                postId,
                reaction,
            };
            await addReaction(post);
            console.log("reaction added");
        });
    });


}