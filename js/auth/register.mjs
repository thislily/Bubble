import { REGISTER_URL } from "../auth/constants.mjs";  

//send user registration data to the API
export async function registerUser(profile) {
    const response = await fetch(REGISTER_URL, {
        method: "POST",
        body: profile,
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(response);
    return response.json();
    
}
