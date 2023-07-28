const API_KEY = "cec6f368dbee14c2300729e2404dede8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrandingMovies = (query) => {
  fetch(`${BASE_URL}/trending/movie/week/key=${API_KEY}`).then((response) =>
    response.json()
  );
};
