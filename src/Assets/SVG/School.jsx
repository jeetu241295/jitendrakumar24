import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css.js';

const School = props => {
  const { sx } = props;
  return (
    <SvgIcon sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}>
      <path d="M12 3l11.016 6v8.016h-2.016v-6.938l-9 4.922-11.016-6zM5.016 13.172l6.984 3.844 6.984-3.844v4.031l-6.984 3.797-6.984-3.797v-4.031z" />
    </SvgIcon>
  );
};

School.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
School.defaultProps = {
  sx: {}
};

export default School;
