//render a post
import { timeAgo } from "./timeAgo.mjs";

//function that returns a post template. The template includes the user's name, avatar, post image, post title, post body, post date.
export function postTemplate(post) {
  const user = localStorage.getItem("profile");
  const profile = JSON.parse(user);

  const card = document.createElement("div");
  card.classList.add(
    "card",
    "rounded-5",
    "bg-light",
    "m-auto",
    "p-0",
    "border-0",
    "mb-3",
    "card-w-image"
  );

  const cardBody = document.createElement("a");

  if(window.location.pathname.includes("/post/")){
    cardBody.href = "";
  } else {
      if (!post._author) {
    cardBody.href = `./post/index.html?name=${profile.name}&id=${post.id}`;
  } else if (post._author) {
    cardBody.href = ``;
  }
  }

  cardBody.classList.add("card-body", "p-0");
  cardBody.style.textDecoration = "none";
  card.appendChild(cardBody);

  const row = document.createElement("div");
  row.classList.add("row", "p-3");
  cardBody.appendChild(row);

  const col = document.createElement("div");
  col.classList.add("col", "col-auto", "pe-0", "d-flex", "flex-row");
  row.appendChild(col);

  const img = document.createElement("img");

  if (post._author) {
    if (post._author.avatar === "") {
      img.src =
        "https://cdn.vectorstock.com/i/500p/52/91/cute-happy-soap-bubble-vector-27845291.jpg";
    } else {
      img.src = post._author.avatar;
    }
    img.alt = `${post._author.name}`;
  } else {
    if (profile.avatar === "") {
      img.src =
        "https://cdn.vectorstock.com/i/500p/52/91/cute-happy-soap-bubble-vector-27845291.jpg";
    } else {
      img.src = profile.avatar;
    }
    img.alt = `${profile.name}`;
  }
  img.classList.add(
    "profile-thumbnail",
    "img-thumbnail",
    "rounded-circle",
    "p-0",
    "object-fit-cover"
  );
  img.style.aspectRatio = "1/1";
  col.appendChild(img);

  const h3 = document.createElement("h3");
  h3.classList.add("card-title", "h4", "pt-3", "ps-2");
  if (post._author) {
    h3.textContent = post._author.name;
  } else {
    h3.textContent = profile.name;
  }
  col.appendChild(h3);

  const col2 = document.createElement("div");
  col2.classList.add("col", "text-end");
  row.appendChild(col2);

  const button = document.createElement("button");
  if (post._author) {
    button.classList.add(
      "btn",
      "bg-success-subtle",
      "btn-outline-success",
      "text-dark",
      "text-emphasis-success",
      "ps-1",
      "p-1",
      "m-1",
      "text-end"
    );
    button.innerHTML = `follow  <i class="bi bi-plus-circle"></i>`;
  } else {
    button.classList.add(
      "btn",
      "bg-info-subtle",
      "btn-outline-info",
      "text-dark",
      "text-emphasis",
      "ps-1",
      "p-1",
      "m-1",
      "text-end"
    );
    button.innerHTML = `edit  <i class="bi bi-pencil-square"></i
  >`;
  }
  col2.appendChild(button);

  if (post.media !== "") {
    const img2 = document.createElement("img");
    img2.src = post.media;
    img2.alt = `${post.title}`;
    img2.classList.add("card-image", "w-100", "pb-3");
    cardBody.appendChild(img2);
  }

  const row2 = document.createElement("div");
  row2.classList.add("row");
  cardBody.appendChild(row2);

  const col3 = document.createElement("div");
  col3.classList.add("col");
  row2.appendChild(col3);

  const b = document.createElement("b");
  b.classList.add("card-text", "px-4", "pb-3", "mb-3");
  b.textContent = post.title;
  col3.appendChild(b);

  const p = document.createElement("p");
  p.classList.add("card-text", "px-4", "pb-3");
  p.textContent = post.body;
  col3.appendChild(p);

  const i = document.createElement("i");
  i.classList.add("text-dark", "text-end", "d-block", "pe-4", "pb-3");
  if (post.created === post.updated) {
    i.textContent = `${timeAgo(post.created)}`;
  } else {
    i.textContent = `Originally posted ${timeAgo(
      post.created
    )}, updated ${timeAgo(post.updated)}`;
  }
  col3.appendChild(i);

  return card;
}