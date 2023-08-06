import PropTypes from 'prop-types'
import MoviesListItem from './MoviesListItem'

const MoviesList = ({movies}) => {
  return (
    <>
        <ul>
            {movies.map(({id, title, poster_path, vote_average, release_date}) => (
                <MoviesListItem 
                  key={id} 
                  id={id} 
                  title={title} 
                  url={poster_path} 
                  rating={vote_average} 
                  releaseDate={release_date}
                />
            ))}
        </ul>
    </>
  )
}

MoviesList.propTypes = {
  movies:PropTypes.array,
}

export default MoviesList