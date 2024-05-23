export const API_URL = "https://api.noroff.dev/api/v1"; // API URL
export const SOCIAL_URL = "https://api.noroff.dev/api/v1/social"; // Social URL
export const LOGIN_URL = `${API_URL}/social/auth/login`; // Login URL
export const REGISTER_URL = `${API_URL}/social/auth/register`; // Register URL
export const POSTS_URL = `${SOCIAL_URL}/posts`; // Posts URL
export const PROFILE_URL = `${SOCIAL_URL}/profiles`; // Profile URL

// Function to get the headers
export function headers() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
