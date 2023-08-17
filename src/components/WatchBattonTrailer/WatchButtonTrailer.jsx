import PropTypes from 'prop-types';
import { Button } from './WatchButtonTrailer.styled';

const WatchButtonTrailer = ({children, onClick, ...allProps}) => {
  return (
    <Button
        type='button'
        onClick={onClick}
        {...allProps}
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
    'aria-label': PropTypes.string,
  };

export default WatchButtonTrailer