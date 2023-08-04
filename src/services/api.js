const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = 'cec6f368dbee14c2300729e2404dede8';

export const getTrandingMovies = () => {
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
};

export const getSearchMovie = (query) => {
  fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`).then((response) =>
    response.json()
  )
};
