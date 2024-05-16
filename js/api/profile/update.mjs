import { PROFILE_URL, headers } from "../auth/constants.mjs";
// update profile data

export async function editProfile(media) {
  const name = window.location.search.split("=")[1];
  const response = await fetch(PROFILE_URL + "/" + name + "/media", {
    method: "PUT",
    body: JSON.stringify(media),
    headers: headers(),
  });
  console.log(response);
  const userData = response.JSON;
  console.log(userData);

  window.location.href = "/profile/index.html" + "?name=" + name;
}