const mealsCounter = async () => {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f");
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();
    return data.meals.length;
  } catch (error) {
    console.error("Error counting comments:", error);
    return 0;
  }
};

export default mealsCounter;
