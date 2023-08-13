import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import defaultProfileImg from '../../img/default-profile-img.jpg'
import { CastContainer, CastList, CastItem, CastImage, CastTitle, CastText } from "./Cast.styled";

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
    <CastContainer>
      {error && alert(`${error.message}`)}
      {isLoading && <div>Loading...</div>}
      <CastList>
        {movieCast.map(({id,profile_path, name, character}) => (
          <CastItem key={id}>
            <div>
              <CastImage 
                src={
                  profile_path 
                    ? `https://image.tmdb.org/t/p/w154/${profile_path}` 
                    : defaultProfileImg
                } 
                alt={name} 
              />
            </div>


            <div>
              <CastTitle>{name}</CastTitle>
              <CastText>{character}</CastText>
            </div>
              
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  )
};

export default Cast;
