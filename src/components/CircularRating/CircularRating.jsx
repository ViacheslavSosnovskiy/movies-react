import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { WrapperCircularRating } from './CircularRating.styled';


const CircularRating = ({rating}) => {

  const ratingColor = rating < 5 ? '#b3240b' : rating < 7 ? '#adad1d' : '#1a870e'

  return (
    <WrapperCircularRating>
        <CircularProgressbar 
            maxValue={10}
            text={`${rating}`}
            value={rating}
            styles={buildStyles({
                textColor: 'white',
                trailColor: 'black',
                backgroundColor: '#3e98c7',
                textSize: '24px',
                pathColor: ratingColor
            })}
        />
    </WrapperCircularRating>
  )
}

export default CircularRating