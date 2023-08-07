import PropTypes  from 'prop-types'
import { Link, Outlet, useLocation } from 'react-router-dom'
import defaultMovieImg from '../../img/default-movie-poster.jpg'


const MovieCard = ({movieDetails}) => {
    const {title, poster_path, vote_average = 0, overview, genres, release_date, vote_count} = movieDetails
    const location = useLocation()

    const moviePoster = poster_path 
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : defaultMovieImg

    const getGenres = genres => {
        if(genres) {
            const genresList = genres.map(genre => genre.name).join(", ")
            return genresList
        }
        return;
    }

    const voteAvarage = Math.round((vote_average * 10))
  return (
    <>
        <div>
            <div>
            <img src={moviePoster} alt={title} width={340}/>
            </div>
            <h2>{title}</h2>
            <p>User Score: {voteAvarage}%</p>
            <p>People voted: {vote_count}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{getGenres(genres)}</p>
            <h3>Release date</h3>
            <p>{release_date}</p>
        </div>
        <ul>
            <li>
                <Link to="reviews" state={location.state?.from ?? '/movies'}>Descriptio</Link>
            </li>
            <li>
                <Link to="cast" state={location.state?.from ?? '/movies'}>Cast</Link>
            </li>
        </ul>

      <div>
        <Outlet />
      </div>
    </>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  release_date: PropTypes.string,
}

export default MovieCard