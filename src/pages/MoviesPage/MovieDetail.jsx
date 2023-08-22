import { useEffect, useState } from "react";
import { Navigate, useLocation, useParams} from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { getMovieDetails } from "../../services/api";
import MovieCard from "../../components/MovieCard/MovieCard";
import { BackLink, WrapperText } from "./MovieDetail.styled";
import { RotatingLines } from "react-loader-spinner";

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
    <BackLink to="/" state={location.state?.from ?? '/'}>
      <FaArrowCircleLeft />
      <WrapperText>Back</WrapperText>
    </BackLink>
    {isLoading && <RotatingLines strokeColor="white" />}
    <MovieCard movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetail;
