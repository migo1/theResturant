async function getLikes(itemId) {
  try {
    const appId = localStorage.getItem("app_id");
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
    const response = await fetch(url);
    const data = await response.json();
    const item = data.find((item) => item.item_id === itemId);
    return item ? item.likes : 0;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
}

export default getLikes;
