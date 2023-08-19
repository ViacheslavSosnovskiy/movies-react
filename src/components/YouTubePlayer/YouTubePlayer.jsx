import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'
import { Title } from './YouTubePlayer.styled'
import imageError from '../../img/page-404.png'


const YouTubePlayer = ({trailers}) => {
  return (
    <>
      {trailers && trailers.length !== 0 ? (
        <ReactPlayer 
          controls
          height='400px'
          width='640px'
          url={`https://www.youtube.com/embed/${trailers[0].key}`}
        />
      ) : (
        <>
          <Title>Sorry, no trailer for this movie 😢 </Title>
          <img src={imageError} alt='no trailer'/>
        </>
      )}
    </>
  )
}

YouTubePlayer.propTypes = {
    trailers: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
      })
    ),
  };
 
export default YouTubePlayer