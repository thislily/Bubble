//render a post
import { timeAgo } from "./timeAgo.mjs";

//function that returns a post template. The template includes the user's name, avatar, post image, post title, post body, post date, and approve/deny buttons.
export function postTemplate(postData) {
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "rounded-5",
    "bg-light",
    "m-auto",
    "p-0",
    "border-0",
    "mb-3"
  );
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-0");
  card.appendChild(cardBody);
  const row1 = document.createElement("div");
  row1.classList.add("row", "p-3");

  cardBody.appendChild(row1);
  const userNameCol = document.createElement("div");
  userNameCol.classList.add("col", "col-auto", "pe-0", "d-flex", "flex-row");
  row1.appendChild(userNameCol);
  const userAvatarMini = document.createElement("img");
  userAvatarMini.src = postData.author.avatar.url;
  userAvatarMini.alt = postData.author.avatar.alt;
  userAvatarMini.classList.add(
    "profile-thumbnail",
    "img-thumbnail",
    "rounded-circle",
    "p-0"
  );
  userNameCol.appendChild(userAvatarMini);
  const userName = document.createElement("h3");
  userName.classList.add("card-title", "h4", "pt-3", "ps-2");
  userName.textContent = postData.author.name;
  userNameCol.appendChild(userName);
  // const followCol = document.createElement("div");
  // followCol.classList.add("col", "text-end", "pt-1");
  // row1.appendChild(followCol);
  // const followButton = document.createElement("button");
  // followButton.classList.add("btn", "bg-success-subtle", "btn-outline-success", "text-success-emphasis", "ps-2", "p-1", "m-1", "text-end");
  // followButton.textContent = "follow";
  // followButton.innerHTML = "follow<i class=\"bi bi-plus\"></i>";
  // followCol.appendChild(followButton);
  if (postData.media) {
    const postImage = document.createElement("img");
    postImage.src = postData.media;
    postImage.classList.add("card-image", "w-100", "pb-3");
    cardBody.appendChild(postImage);
  }

  const row2 = document.createElement("div");
  row2.classList.add("row");
  cardBody.appendChild(row2);
  const postTextCol = document.createElement("div");
  postTextCol.classList.add("col");
  row2.appendChild(postTextCol);
  const postTitle = document.createElement("h5");
  postTitle.classList.add("card-title", "px-4", "py-3");
  postTitle.textContent = postData.title;
  postTextCol.appendChild(postTitle);
  const postText = document.createElement("p");
  postText.classList.add("card-text", "px-4", "pb-3");
  postText.textContent = postData.body;
  postTextCol.appendChild(postText);
  const row3 = document.createElement("div");
  row3.classList.add("row");
  const colDate = document.createElement("div");
  colDate.classList.add("col");
  row3.appendChild(colDate);

  const postDate = document.createElement("i");
  postDate.classList.add("text-dark", "px-4", "pb-3");
  row3.appendChild(postDate);
  if (postData.created === postData.updated) {
    const displayTimeAgo = timeAgo(postData.created);
    postDate.textContent = "created" + displayTimeAgo;
  } else {
    const displayTimeAgo = timeAgo(postData.updated);
    postDate.textContent = "updated" + displayTimeAgo;
  }
  postTextCol.appendChild(postDate);

  const reactions = document.createElement("div");
  reactions.classList.add(
    "col",
    "d-flex",
    "justify-content-end",
    "align-items-center",
    "px-4",
    "pb-3"
  );
  row3.appendChild(reactions);
  postTextCol.appendChild(reactions);
  const likeButton = document.createElement("button");
  likeButton.classList.add("btn", "btn-light", "border-0");
  likeButton.innerHTML = '<i class="bi bi-heart h3"></i>';
  reactions.appendChild(likeButton);
  const likeCount = document.createElement("span");
  likeCount.classList.add("text-dark", "h5");
  if (postData._count.reactions > 0) {
    likeCount.textContent = `${postData._count.reactions} Likes`;
  } else {
    likeCount.textContent = "No Likes";
  }
  reactions.appendChild(likeCount);

  console.log(postData._count.reactions);

  const row4 = document.createElement("div");
  row4.classList.add("row");
  cardBody.appendChild(row4);
  const approveCol = document.createElement("div");
  approveCol.classList.add("col", "pe-0");
  row4.appendChild(approveCol);
  const approveButton = document.createElement("button");
  approveButton.classList.add(
    "btn",
    "btn-success",
    "border-bottom-left-radius",
    "w-100"
  );
  approveButton.innerHTML = '<i class="bi bi-check-circle h3"></i>';
  approveCol.appendChild(approveButton);
  const denyCol = document.createElement("div");
  denyCol.classList.add("col", "ps-0");
  row4.appendChild(denyCol);
  const denyButton = document.createElement("button");
  denyButton.classList.add(
    "btn",
    "btn-danger",
    "border-bottom-right-radius",
    "w-100"
  );
  denyButton.innerHTML = '<i class="bi bi-x-circle h3"></i>';
  denyCol.appendChild(denyButton);

  return card;
}
