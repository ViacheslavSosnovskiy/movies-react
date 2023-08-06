const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = 'cec6f368dbee14c2300729e2404dede8';

export const getTrandingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`

  const response = await fetch(url);
  const {results} = await response.json();
  return response.ok ? results : new Promise.reject(new Error('Not found'))
  .then((response) =>
    response.json()
  );
};

export const getSearchMovie = async (query) => {
  const url = `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  
  const response = await fetch(url)
  const {results} = await response.json()
  return response.ok ? results : Promise.reject(new Error('Not found'))
  };

export const getMovieDetails = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`

  const response = await fetch(url)
  const movie = await response.json()
  return response.ok ? movie : Promise.reject(new Error('Not found'))
}