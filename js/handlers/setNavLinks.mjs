//set nav links to correct url

export function setNavLinks() {
    const profileLink = document.getElementById("profile-link");
    const feedLink = document.getElementById("feed-link");
    const profile = localStorage.getItem("profile");
    const user = JSON.parse(profile);
    const userName = user.name;

    if (profileLink) {
        profileLink.href = `/profile/index.html?name=${userName}`;
    }

    if (feedLink) {
        feedLink.href = "/feed/index.html";
    }
}