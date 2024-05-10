import { API_URL } from "../auth/constants.mjs";  

//send user regitration data to the API
export async function registerUser(profile) {
    const response = await fetch(API_URL + "/auth/register", {
        method: "POST",
        body: profile,
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(response);
    
}
