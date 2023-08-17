import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'
import { CloseButton, Title, VideoPlayer } from './YouTubePlayer.styled'
import imageError from '../../img/page-404.png'


const YouTubePlayer = ({trailerKey}) => {
  return (
    <>
    {trailerKey.length !== 0 ? (
        <VideoPlayer>
            <CloseButton>Close</CloseButton>
            <ReactPlayer 
                controls
                height='100%'
                width='100%'
                url={`https://www.youtube.com/watch?v=${trailerKey}`} 
            />
        </VideoPlayer>
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
    trailer: PropTypes.array,
}

export default YouTubePlayer