import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const Heart = props => {
  const { sx } = props;
  return (
    <SvgIcon
      sx={[styles.icon, styles.heartIcon, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"></path>
    </SvgIcon>
  );
};

Heart.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Heart.defaultProps = {
  sx: {}
};

export default Heart;
