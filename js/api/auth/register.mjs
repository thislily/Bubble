import { REGISTER_URL, API_KEY } from "../auth/constants.mjs";  
import { loginUser } from "./login.mjs";

//send user registration data to the API
export async function registerUser(profile) {
    const response = await fetch(REGISTER_URL, {
        method: "POST",
        body: profile,
        headers: {
            "Content-Type": "application/json",
            "X-Noroff-API-key": API_KEY
        }
    });
    console.log(response);
    
    let userData = await response.json();

    console.log(userData);
    
}
