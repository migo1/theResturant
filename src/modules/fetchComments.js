const fetchComments = async (itemId) => {
    try {
      if (typeof itemId === "undefined") {
        return [];
      }
      const appId = localStorage.getItem("app_id");
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;
      const response = await fetch(url);
      if (response.status === 500) {
        return []; // Return an empty array if status code is 500
      }
      if (!response.ok) {
        throw new Error("Failed to fetch item comments");
      }
      const comments = await response.json();
      return comments;
    } catch (error) {
      console.error("Error fetching item comments:", error);
      throw error;
    }
  };
  export default fetchComments;