import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const VerticalMenu = props => {
  const { sx } = props;
  return (
    <SvgIcon sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}>
      <circle cx="12" cy="4" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="20" r="2.5" />
    </SvgIcon>
  );
};

VerticalMenu.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
VerticalMenu.defaultProps = {
  sx: {}
};

export default VerticalMenu;
