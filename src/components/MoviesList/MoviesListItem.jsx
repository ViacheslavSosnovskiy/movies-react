import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import defaultMovieImg from '../../img/default-movie-poster.jpg'
import CircularRating from '../CircularRating/CircularRating'
import { DescriptionWrapper, Image, Item, MovieLink, RatingWrapper, Text, Title} from './MoviesListItem.styled'

const MoviesListItem = ({id, url, title, rating = 0, releaseDate }) => {
  const location = useLocation()

  const moviePoster = url 
  ? `https://image.tmdb.org/t/p/w500/${url}` 
  : defaultMovieImg

  return (
      <Item>
        <MovieLink to={`/movies/${id}`} state={{from:location}}>
          <div>
            <Image src={moviePoster} alt={title} />
            <RatingWrapper>
              <CircularRating rating={rating.toFixed(1)}/>
            </RatingWrapper>
          </div>
          
          <DescriptionWrapper>
            <Title>{title}</Title>
            <Text>{releaseDate.slice(0,4)}</Text>
          </DescriptionWrapper>
        </MovieLink>
      </Item>
  )
}

MoviesListItem.propTypes ={ 
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  rating: PropTypes.number,
  releaseDate: PropTypes.string,

}

export default MoviesListItem