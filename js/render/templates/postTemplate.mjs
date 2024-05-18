//render a post
import { timeAgo } from "./timeAgo.mjs";

//function that returns a post template. the template includes the user's name, avatar, post image, post title, post body, post date.
//the template also includes a follow button if the post is not the user's own post, and an edit button if the post is the user's own post.
export function postTemplate(post) {
  const user = localStorage.getItem("profile");
  const profile = JSON.parse(user);
  const author = post.author;

  const card = document.createElement("div");
  card.id = post.id;
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


//the card body is a link to the post page
  const cardBody = document.createElement("a");

  if (window.location.pathname.includes("/post/")) {
    cardBody.href = "";
  } else {
    if (!author) {
      cardBody.href = `/profile/post/index.html?name=${profile.name}&id=${post.id}`;
    } else if (author) {
      cardBody.href = `/profile/post/index.html?name=${author.name}&id=${post.id}`;
    }
  }
  cardBody.classList.add("card-body", "p-0");
  cardBody.style.textDecoration = "none";
  card.appendChild(cardBody);

  const row = document.createElement("div");
  row.classList.add("row", "p-3");
  cardBody.appendChild(row);

  //the name & avatar are links to the user's profile page
  const col = document.createElement("a");
  col.classList.add("col", "col-auto", "pe-0", "d-flex", "text-decoration-none", "text-black", "flex-row");
  if (author) {
    col.href = `/profile/index.html?name=${author.name}`;
  } else {
    col.href = `/profile/index.html?name=${profile.name}`;
  }
  row.appendChild(col);

  //if the post is the user's own post, the avatar is set to the user's avatar or a default avatar if the user has not set an avatar, else the avatar is set to the post author's avatar or a default avatar if the post author has not set an avatar
  const img = document.createElement("img");
  if (author) {
    if (author.avatar === null) {
      img.src =
        "https://cdn.vectorstock.com/i/500p/52/91/cute-happy-soap-bubble-vector-27845291.jpg";
    } else {
      img.src = author.avatar;
    }
    img.alt = `${author.name}`;
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

  //if the post is the user's own post, the name is set to the user's name, else the name is set to the post author's name
  const h3 = document.createElement("h3");
  h3.classList.add("card-title", "h4", "pt-3", "ps-2");
  if (author) {
    h3.textContent = author.name;
  } else {
    h3.textContent = profile.name;
  }
  col.appendChild(h3);

  const col2 = document.createElement("div");
  col2.classList.add("col", "text-end");
  row.appendChild(col2);

  //if the post is the user's own post, the button is set to edit, else the button is set to follow
  const editButton = document.createElement("a");
  const followButton = document.createElement("button");
  if (author && author.name !== profile.name) {
    followButton.classList.add(
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
    followButton.innerHTML = `follow  <i class="bi bi-plus-circle"></i>`;

    col2.appendChild(followButton);
  } else {
    editButton.classList.add(
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
    editButton.innerHTML = `edit  <i class="bi bi-pencil-square"></i
  >`;
    editButton.href = `/profile/post/edit/index.html?name=${profile.name}&id=${post.id}`;
    col2.appendChild(editButton);
  }

  //if the post has a media, the media is set to the post media
  if (post.media !== null && post.media !== "") {
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

  //the post title and body are set to the post title and body
  const b = document.createElement("b");
  b.classList.add("card-text", "px-4", "pb-3", "mb-3");
  b.textContent = post.title;
  col3.appendChild(b);

  const p = document.createElement("p");
  p.classList.add("card-text", "px-4", "pb-3");
  p.textContent = post.body;
  col3.appendChild(p);

  //the post date is set to the post created date, if the post has been updated, the post date is set to the post updated date
  const i = document.createElement("i");
  i.classList.add("text-dark", "text-end", "d-block", "pe-4", "pb-3");
  if (post.created === post.updated) {
    i.textContent = `posted: ${timeAgo(post.created)}`;
  } else {
    i.textContent = `posted: ${timeAgo(
      post.created
    )},   updated: ${timeAgo(post.updated)}`;
  }
  col3.appendChild(i);

  return card;
}
