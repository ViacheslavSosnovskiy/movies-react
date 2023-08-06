import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams} from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation()
  const {movieId} = useParams()

  useEffect(() => {
    if(movieId) getMovieDetailsById()

    async function getMovieDetailsById() {
      setIsLoading(true)
      try {
        const movieInformation = await getMovieDetails(movieId)
        setMovieDetails(movieInformation)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [movieId])

  return (
    <>
    {error && <Navigate to='/404'/>}
    <Link to="/movies" state={location.state?.from ?? '/movies'}>Back</Link>
    {isLoading && <div>Loading...</div>}
    <MovieCard movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetail;
