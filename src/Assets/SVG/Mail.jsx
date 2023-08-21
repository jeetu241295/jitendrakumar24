import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const Mail = props => {
  const { sx } = props;
  return (
    <SvgIcon sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}>
      <path d="M20.016 8.016v-2.016l-8.016 5.016-8.016-5.016v2.016l8.016 4.969zM20.016 3.984q0.797 0 1.383 0.609t0.586 1.406v12q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-12q0-0.797 0.586-1.406t1.383-0.609h16.031z"></path>
    </SvgIcon>
  );
};

Mail.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Mail.defaultProps = {
  sx: {}
};

export default Mail;
