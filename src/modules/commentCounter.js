const countComments = async (itemId) => {
  try {
    const appId = localStorage.getItem("app_id");
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const comments = await response.json();
    if (!comments || comments.length === 0) {
      return 0;
    }
    return comments.length;
  } catch (error) {
    console.error("Error counting comments:", error);
    return 0;
  }
};
export default countComments;