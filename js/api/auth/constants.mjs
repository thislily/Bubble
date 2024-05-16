export const API_URL = "https://api.noroff.dev/api/v1" // API URL
export const  SOCIAL_URL = "https://api.noroff.dev/api/v1/social" // Social URL
export const  LOGIN_URL = `${API_URL}/social/auth/login` // Login URL
export const  REGISTER_URL = `${API_URL}/social/auth/register` // Register URL
export const POSTS_URL = `${SOCIAL_URL}/posts` // Posts URL
export const PROFILE_URL = `${SOCIAL_URL}/profiles` // Profile URL

// export const API_KEY = "8a4110e1-0098-4088-9756-6cdc51a9e7fe"; // API key

export function headers() {
	const token = localStorage.getItem("token");

	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`
	};
}