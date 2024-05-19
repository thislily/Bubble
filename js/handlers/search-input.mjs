import { searchPosts } from '../render/search.mjs';

 // Get the search input element
export const searchPostsInput = document.getElementById('search-posts-input');
// Variable to store the timeout ID
let searchTimeout = null;

// Function to handle input change with debouncing
export function handleSearchInput() {
    // Clear the existing timeout if there is one
    if (searchTimeout !== null) {
        clearTimeout(searchTimeout);
    }

    // Set a new timeout to search after 2000 milliseconds (2 seconds)
    searchTimeout = setTimeout(() => {
        searchPosts(); // Call the search function after the delay
    }, 1500); // Delay of 1500 milliseconds
}

// Add an event listener to the search input element
export function setSearchInput() {
    searchPostsInput.addEventListener('input', handleSearchInput);
}