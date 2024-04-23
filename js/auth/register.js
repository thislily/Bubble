//register a new user to the app

const api = "https://v2.api.noroff.dev/docs/json";
const registerEndpoint = "/auth/register";

// Function to authenticate a new user
async function registerUser(userData) {
    try {
        const response = await fetch(api + registerEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful registration
            console.log("User registered successfully:", data);
        } else {
            // Handle registration error
            console.error("Registration failed:", response.status);
        }
    } catch (error) {
        // Handle network or other errors
        console.error("Error occurred during registration:", error);
    }
}

// Example usage
const newUser = {
    username: "exampleUser",
    password: "examplePassword",
    email: "example@example.com",
};

registerUser(newUser);