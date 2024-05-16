import { REGISTER_URL } from "../auth/constants.mjs";  
import { loginUser } from "./login.mjs";

//send user registration data to the API
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
    
    if (userData) {
        loginUser(profile);
    } else {
        console.error(userData);
    }
    
}
