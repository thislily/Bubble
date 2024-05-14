//fetch api key

export async function fetchApiKey() {
  const response = await fetch("https://v2.api.noroff.dev/auth/create-api-key", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      
    },
  });
  const data = await response.json();
  console.log(data);
}
