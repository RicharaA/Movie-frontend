const BASE_URL = "http://localhost:5000";
const API_KEY = "abc123xyz";

// 🎬 Get all movies
export const loadMovies = async () => {
  const response = await fetch(`${BASE_URL}/api/movies`, {
    headers: {
      "x-api-key": API_KEY
    }
  });

  const data = await response.json();
  return data;
};
