import { fetchApiKey } from "./api/auth/authFetch.mjs";
import { fetchPosts } from "./api/profile/posts.mjs";
import { editProfileForm, handleEditProfileForm } from "./handlers/edit-profile-form.mjs";
import { handleLoginForm,loginForm } from "./handlers/login-form.mjs";
import { handleRegForm, regForm } from "./handlers/reg-form.mjs";
import { displayProfile } from "./render/profile.mjs";


document.addEventListener("DOMContentLoaded", function () {


    if (regForm) {
        handleRegForm();
    } else if (loginForm) {
        handleLoginForm();
    } else if (editProfileForm){
        handleEditProfileForm();
    }

    if (window.location.pathname === "/profile/index.html" || window.location.pathname === "/profile/" || window.location.pathname === "/profile/edit/index.html" || window.location.pathname === "/profile/edit/") {
        displayProfile();
        fetchApiKey();
    }   

    
});

//register user
//login user (automatically if registering)
//logout user
//view user profile
//update user profile
//create a post
//view all posts
//view a single post by post id
//update a post by post id
//delete a post by post id
//view all comments for a post by post id
//create a comment for a post by post id
//react to a post by post id
//view all reactions for a post by post id
//view followers for a user by user id
//view following for a user by user id
//follow a user by user id
//unfollow a user by user id


