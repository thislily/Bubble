import { handleRegForm } from "./handlers/reg-form.mjs";
// import { viewForms } from "./render/login-page.js";


// if (location.pathname === "/" || location.pathname === "/index.html") {
//     viewForms();
// }



//register user
document.addEventListener("DOMContentLoaded", function () {


    if (location.pathname === "/register/index.html" || location.pathname === "/register/") {
        handleRegForm();
    }

    if (location.pathname === "/" || location.pathname === "/index.html") {
        viewForms();
    }
});


//login user (automatically if registering)
//logout user
//view user profile
//update user profile
//delete user profile
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


