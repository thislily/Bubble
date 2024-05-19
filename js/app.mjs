// Description: Main entry point for the application. This file is responsible for loading the necessary modules and setting up the event listeners for the application.
import { handleCreatePostForm, createPostForm } from "./handlers/create-post.mjs";
import { handleUpdatePostForm, updatePostForm } from "./handlers/update-post.mjs";
import { editProfileForm, handleEditProfileForm } from "./handlers/edit-profile-form.mjs";
import { handleLoginForm,loginForm } from "./handlers/login-form.mjs";
import { handleRegForm, regForm } from "./handlers/reg-form.mjs";
import { displayPost } from "./render/post.mjs";
import { displayProfile, displayProfilePosts } from "./render/profile.mjs";
import { handleRemovePostButton } from "./handlers/removePostButton.mjs";
import { displayFeed } from "./render/feed.mjs";
import { setNavLinks } from "./handlers/setNavLinks.mjs";
import { handleFilterPostsSelector, filterPosts } from "./render/feed.mjs";


document.addEventListener("DOMContentLoaded", function () {
//check if the current page is the registration page, login page, edit profile page, or create post page
    if (regForm) {
        handleRegForm();
    } else if (loginForm) {
        handleLoginForm();
    } else if (editProfileForm){
        handleEditProfileForm();
    } else if (createPostForm) {
        handleCreatePostForm();
    } else if (updatePostForm) {
        handleUpdatePostForm();
    } else if (filterPosts) {
        handleFilterPostsSelector();
    }

    //check if the current page is the profile page or a post page
    if (window.location.pathname.includes("/profile/")) {
        displayProfile();
    }

    if (window.location.pathname === "/profile/index.html"){
        displayProfilePosts();
    }

    if (window.location.pathname.includes("/post/")) {
        displayPost();
        handleRemovePostButton();
    }

    if (window.location.pathname === "/feed/index.html") {
        displayFeed();
        handleFilterPostsSelector();
    }

    setNavLinks();

});


// ********************* register user 
// ********************* login user (automatically if registering) 

// ********************* view user profile 
// ********************* update user profile 

// ********************* create a post 
// ********************* can view created post by id 
// ********************* update a post by post id 
//delete a post by post id 

//view all posts
//view a single post by post id 
//view all posts by a user by user id
//view all posts by a user by username

//create a comment for a post by post id
//view all comments for a post by post id

//react to a post by post id
//view all reactions for a post by post id

//view followers for a user by user id
//view following for a user by user id

//follow a user by user id
//unfollow a user by user id


