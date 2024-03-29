import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getMovieCredits } from "../../services/api";
import defaultProfileImg from '../../img/default-profile-img.jpg'
import { Container } from '../../globalStyles'
import { CastList, CastItem, CastImage, CastTitle, CastText, CastWrapperImage } from "./Cast.styled";
import Spinner from "../Spinner/Spinner";


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
    <Container>
      {error && toast.error('Cast not found')}
      <CastList>
        {movieCast.map(({id,profile_path, name, character}) => (
          <CastItem key={id}>
            <CastWrapperImage>
              <CastImage 
                src={
                  profile_path 
                    ? `https://image.tmdb.org/t/p/w154/${profile_path}` 
                    : defaultProfileImg
                } 
                alt={name} 
              />
            </CastWrapperImage>


            <div>
              <CastTitle>{name}</CastTitle>
              <CastText>{character}</CastText>
            </div>
              
          </CastItem>
        ))}
      </CastList>
      <Spinner isLoading={isLoading}/>  
    </Container>
  )
};

export default Cast;
