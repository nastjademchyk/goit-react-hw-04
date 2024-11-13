import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "FptwxiChC5Bm_nYApjuu2BDwgNSfw5yahjVJ1hijrXE";

export const fetchImages = async (query) => {
  if (!query || query.trim() === "") {
    console.error("Query cannot be empty");
    return {
      success: false,
      images: [],
    };
  }
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query,
        client_id: ACCESS_KEY,
        per_page: 12,
      },
      headers: {
        Accept: "application/json",
        "Accept-Version": "v1",
      },
    });
    return {
      success: true,
      images: response.data.results,
    };
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return {
      success: false,
      images: [],
    };
  }
};

export default fetchImages;
