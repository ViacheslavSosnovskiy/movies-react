import PropTypes from 'prop-types'
import MoviesListItem from './MoviesListItem'
import { List, Section } from './MoviesList.styled'

const MoviesList = ({movies}) => {
  return (
    <Section>
        <List>
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
        </List>
    </Section>
  )
}

MoviesList.propTypes = {
  movies:PropTypes.array,
}

export default MoviesList