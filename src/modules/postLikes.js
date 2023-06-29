import getLikes from "./getLikes.js";

const postLikes = (idMeal, countSpan) => {
  const appId = localStorage.getItem("app_id");
  const endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  const data = {
    item_id: idMeal,
  };

  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to perform POST request");
      }
      return getLikes(idMeal);
    })
    .then((likes) => {
      countSpan.textContent = likes;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

export default postLikes;
