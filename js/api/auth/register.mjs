import { REGISTER_URL } from "../auth/constants.mjs";  
import { loginUser } from "./login.mjs";

// register a new user with the profile data
export async function registerUser(profile) {
    const response = await fetch("https://api.noroff.dev/api/v1/social/auth/register", {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(response);
    
    let userData = await response.json();

    console.log(userData);
    
    // if the user is registered, log them in
    if (userData) {
        loginUser(profile);
    } else {
        console.error(userData);
    }
    
}
