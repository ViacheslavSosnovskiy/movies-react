import { useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import SearchMovieForm from "../../components/SearchMovieForm/SearchMovieForm";
import { getSearchMovie } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchMovie, setSearchMovie] = useSearchParams()
  const movieName = searchMovie.get('movieId') ?? ''

  const updateQueryString = query => {
    if(query === movieName) {
     return alert('This word has already been searched for. Try another one.')
    }
    setSearchMovie({movieId: query})
  }

  useEffect(() => {
    if(movieName) getMovieByQuery()
    
    async function getMovieByQuery() {
      setIsLoading(true)
      try {
        const responseMovies = await getSearchMovie(movieName)

        if(!responseMovies.length) {
          return alert('Sorry, there are no movies matching your search query.')
        }
        setMovies(responseMovies)
      } catch(error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [movieName]);
  return (
    <>
      {error && alert(`${error.message}`)}
      {isLoading && <div>Loading...</div>}
      <SearchMovieForm value={movieName} onSubmit={updateQueryString} />
      <MoviesList movies={movies}/>
    </>
  );
};

export default Movies;
