import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../../services/api";
import defaultProfileImg from '../../../img/default-profile-img.png'

const Cast = () => {
  const [movieCast, setMovieCast] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {movieId} = useParams();

  useEffect(() => {
    async function getMovieCast() {
      setIsLoading(true)
      try {
        const cast = await getMovieCredits(movieId)
        setMovieCast(cast)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getMovieCast()
  }, [movieId])

  return (
    <>
      {error && alert(`${error.message}`)}
      {isLoading && <div>Loading...</div>}
      <ul>
        {movieCast.map(({id,profile_path, name, character}) => (
          <li key={id}>
            <img 
              src={
                profile_path 
                  ? `https://image.tmdb.org/t/p/w154/${profile_path}` 
                  : defaultProfileImg
              } 
              alt={name} 
              width={154} />
              <h3>{name}</h3>
              <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Cast;
