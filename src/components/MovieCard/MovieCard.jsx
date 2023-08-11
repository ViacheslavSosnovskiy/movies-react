import PropTypes  from 'prop-types'
import { Link, Outlet, useLocation } from 'react-router-dom'
import defaultMovieImg from '../../img/default-movie-poster.jpg'
import { Container, Article, MovieTitle, Image, PosterWrapper, Text, Title, List, Item } from './MovieCard.styled'

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
        <Container>
            <Article>
              <PosterWrapper>
                <Image src={moviePoster} alt={title}/>
              </PosterWrapper>

              <div>
                <MovieTitle>{title}</MovieTitle>

                <Title>Overview</Title>
                  <Text>{overview}</Text>

                <Title>Genres</Title>
                  <Text>{getGenres(genres)}</Text>
                  
                <Title>Release date</Title>
                  <Text>{release_date}</Text>

                <div>
                  <List>
                    <Item>
                        <Link to="reviews" state={location.state?.from ?? '/'}>Reviews</Link>
                    </Item>
                    <Item>
                        <Link to="cast" state={location.state?.from ?? '/'}>Cast</Link>
                    </Item>
                  </List>
                </div>
              </div>
            </Article>
        </Container>

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