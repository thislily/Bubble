//render a post
import { timeAgo } from "./timeAgo.mjs";

//function that returns a post template. The template includes the user's name, avatar, post image, post title, post body, post date, and approve/deny buttons.
export function profilePostTemplate(post) {
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

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-0");
  card.appendChild(cardBody);

  const row = document.createElement("div");
  row.classList.add("row", "p-3");
  cardBody.appendChild(row);

  const col = document.createElement("div");
  col.classList.add("col", "col-auto", "pe-0", "d-flex", "flex-row");
  row.appendChild(col);

  const img = document.createElement("img");

  if (profile.avatar === "") {
    img.src =
      "https://cdn.vectorstock.com/i/500p/52/91/cute-happy-soap-bubble-vector-27845291.jpg";
  } else {
    img.src = profile.avatar;
  }

  img.alt = `${profile.name}`;
  img.classList.add(
    "profile-thumbnail",
    "img-thumbnail",
    "rounded-circle",
    "p-0"
  );
  col.appendChild(img);

  const h3 = document.createElement("h3");
  h3.classList.add("card-title", "h4", "pt-3", "ps-2");
  h3.textContent = profile.name;
  col.appendChild(h3);

  const col2 = document.createElement("div");
  col2.classList.add("col");
  row.appendChild(col2);

  const button = document.createElement("button");
  button.classList.add("btn", "visually-hidden", "p-3");
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

  //   <div
  //   class="card rounded-5 bg-light m-auto p-0 border-0 mb-3 card-w-image"
  // >
  //   <div class="card-body p-0">
  //     <div class="row p-3">
  //       <div class="col col-auto pe-0 d-flex flex-row">
  //         <img
  //           src="../images/profile-cameron.jpg"
  //           alt=""
  //           class="profile-thumbnail img-thumbnail rounded-circle p-0"
  //         />
  //         <h3 class="card-title h4 pt-3 ps-2">Cameron Evergreen</h3>
  //       </div>

  //       <div class="col">
  //         <button class="btn visually-hidden p-3"></button>
  //       </div>
  //     </div>

  //     <img
  //       src="../images/post-1-cameron.jpg"
  //       alt=""
  //       class="card-image w-100 pb-3"
  //     />

  //     <div class="row">
  //       <div class="col">
  //         <p class="card-text px-4 pb-3">
  //           Discovered a hidden spot deep in the forest where I could sit
  //           and ponder life's mysteries undisturbed. Moments like these
  //           remind me of the importance of introspection and
  //           self-reflection. 💭🌳 #QuietContemplation #InnerJourney
  //           <br />
  //           <i class="text-dark">2 days ago</i>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div
