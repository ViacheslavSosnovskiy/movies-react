import PropTypes from 'prop-types';
import { Button } from './WatchButtonTrailer.styled';

const WatchButtonTrailer = ({children, onClick}) => {
  return (
    <Button
        type='button'
        onClick={onClick}
    >
        {children}
    </Button>
  )
}

WatchButtonTrailer.defaultProps = {
    onClick: () => null,
    children: null,
}

WatchButtonTrailer.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
  };

export default WatchButtonTrailer