import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const Menu = props => {
  const { sx } = props;
  return (
    <SvgIcon sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}>
      <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z" />
    </SvgIcon>
  );
};

Menu.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Menu.defaultProps = {
  sx: {}
};

export default Menu;
