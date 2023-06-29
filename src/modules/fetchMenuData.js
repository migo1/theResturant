const fetchMenuData = async () => {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error:", error);
    throw error;
  }
};

export default fetchMenuData;
