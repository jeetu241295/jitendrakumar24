import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const WebIcon = props => {
  const { sx } = props;
  return (
    <SvgIcon sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}>
      <path d="M18.984 18v-9.984h-13.969v9.984h13.969zM18.984 3.984q0.844 0 1.43 0.586t0.586 1.43v12q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-12q0-0.844 0.586-1.43t1.43-0.586h13.969z"></path>
    </SvgIcon>
  );
};

WebIcon.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
WebIcon.defaultProps = {
  sx: {}
};

export default WebIcon;
