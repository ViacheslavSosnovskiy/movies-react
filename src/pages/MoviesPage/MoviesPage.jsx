import { useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import SearchMovieForm from "../../components/SearchMovieForm/SearchMovieForm";
import { getSearchMovie } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { Container } from "../../globalStyles";
import Spinner from "../../components/Spinner/Spinner";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchMovie, setSearchMovie] = useSearchParams()
  const movieName = searchMovie.get('movieId') ?? ''

  const updateQueryString = query => {
    if(query === movieName) {
     return toast.error('This word has already been searched for. Try another one.')
    }
    setSearchMovie({movieId: query})
  }

  useEffect(() => {
    if(movieName) getMovieByQuery()
    
    async function getMovieByQuery() {
      setIsLoading(true)
      try {
        const responseMovies = await getSearchMovie(movieName)
        setMovies(responseMovies)
        toast.success("Your movie is found")
      } catch(error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [movieName]);
  return (
    <Container>
      {error && toast.error('Sorry, there are no movies matching your search query.')}
      <SearchMovieForm value={movieName} onSubmit={updateQueryString} />
      <MoviesList movies={movies}/>
      <Spinner isLoading={isLoading}/>
    </Container>
  );
};

export default Movies;
