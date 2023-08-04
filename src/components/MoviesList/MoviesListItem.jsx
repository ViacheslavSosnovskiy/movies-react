import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const MoviesListItem = ({id, url, title}) => {
  const location = useLocation()
  return (
    <>
      <li>

        <Link to={`/movies/${id}`} state={{from:location}}>
          <img src={url} alt={title}/>
          {title}
        </Link>
      </li>
    </>
  )
}

MoviesListItem.propTypes ={ 
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default MoviesListItem