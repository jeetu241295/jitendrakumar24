import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const Location = props => {
  const { sx } = props;
  return (
    <SvgIcon sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}>
      <path d="M12 11.484q1.031 0 1.758-0.727t0.727-1.758-0.727-1.758-1.758-0.727-1.758 0.727-0.727 1.758 0.727 1.758 1.758 0.727zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z"></path>
    </SvgIcon>
  );
};

Location.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Location.defaultProps = {
  sx: {}
};

export default Location;
