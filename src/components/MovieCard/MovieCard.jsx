import PropTypes  from 'prop-types'
import { Suspense, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { FaYoutube } from 'react-icons/fa'
import defaultMovieImg from '../../img/default-movie-poster.jpg'
import { Container } from '../../globalStyles'
import { Article, MovieTitle, Image, PosterWrapper, Text, Title, List, Item, ArticleWrapper } from './MovieCard.styled'
import Modal from '../Modal/Modal'
import YouTubePlayer from '../YouTubePlayer/YouTubePlayer'
import WatchButtonTrailer from '../WatchBattonTrailer/WatchButtonTrailer'
import { getMovieTrailer } from '../../services/api'




const MovieCard = ({movieDetails}) => {
  const [trailers, setTrailers] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const {id,title, poster_path, overview, genres, release_date, backdrop_path} = movieDetails
    const location = useLocation()
   
    const toggleModal = async () => {
      try {
        const trailersData = await getMovieTrailer(id)
          setTrailers(trailersData)
          setShowModal(!showModal)
      } catch (error) {
        console.log(error)
      }
    }

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

    const imgUrl = "https://image.tmdb.org/t/p/original"
    const backgroundImage = {backdrop_path} 
        ? `${imgUrl}${backdrop_path}` || `${imgUrl}${poster_path}`
        : ''

  return (
    <>  
      {showModal && 
        <Modal onToggle={toggleModal}>
          <YouTubePlayer trailers={trailers} toggle={showModal}/>
        </Modal>
      }

        <Container>
          <ArticleWrapper backdrop={backgroundImage}>
            <Article>
              <PosterWrapper>
                <Image src={moviePoster} alt={title}/>
              </PosterWrapper>

              <div>
                <MovieTitle>{title}</MovieTitle>

                <WatchButtonTrailer onClick={toggleModal} >
                  Watch trailer &nbsp; <FaYoutube size="2em" />
                </WatchButtonTrailer>

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
          </ArticleWrapper>
        </Container>

      <div>
        <Suspense fallback={<RotatingLines strokeColor="white" />}>
          <Outlet />
        </Suspense>
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