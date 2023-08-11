import PropTypes  from 'prop-types'
import { Link, Outlet, useLocation } from 'react-router-dom'
import defaultMovieImg from '../../img/default-movie-poster.jpg'
import { Article, InfoWrapper, MovieTitle, Overview, Poster, PosterWrapper, Text, Title } from './MovieCard.styled'

const MovieCard = ({movieDetails}) => {
    const {title, poster_path, overview, genres, release_date} = movieDetails
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

  return (
    <>
        <div>
            <Article>
              <PosterWrapper>
                <Poster src={moviePoster} alt={title} width={340}/>
              </PosterWrapper>
              <InfoWrapper>
                <MovieTitle>{title}</MovieTitle>

                <Overview>Overview</Overview>
                  <Text>{overview}</Text>

                <Title>Genres</Title>
                  <Text>{getGenres(genres)}</Text>
                  
                <Title>Release date</Title>
                  <Text>{release_date}</Text>

              </InfoWrapper>
            </Article>
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