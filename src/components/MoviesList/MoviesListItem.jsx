import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import defaultMovieImg from '../../img/default-movie-poster.jpg'

const MoviesListItem = ({id, url, title, rating = 0, releaseDate }) => {
  const location = useLocation()

  const moviePoster = url 
  ? `https://image.tmdb.org/t/p/w500/${url}` 
  : defaultMovieImg

  return (
    <>
      <li>
        <Link to={`/movies/${id}`} state={{from:location}}>
          <img src={moviePoster} alt={title} width={340}/>
          <h3>{title}</h3>
          <p>{releaseDate.slice(0,4)}</p>
          <p>⭐{rating.toFixed(1)}</p>
        </Link>
      </li>
    </>
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