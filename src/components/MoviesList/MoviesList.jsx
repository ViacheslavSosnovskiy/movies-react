import PropTypes from 'prop-types'
import MoviesListItem from './MoviesListItem'

const MoviesList = ({movies}) => {
  return (
    <>
        <ul>
            {movies.map(({id, title, poster_path, ...otherProprs}) => (
                <MoviesListItem key={id} id={id} title={title} url={poster_path} {...otherProprs}/>
            ))}
        </ul>
    </>
  )
}

MoviesList.propTypes = {
  movies:PropTypes.array,
}

export default MoviesList