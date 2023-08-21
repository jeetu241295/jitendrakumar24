import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const styles = {
  normal: {
    color: 'colors.textColor',
    fontSize: '1.5rem',
    lineHeight: '2rem'
  }
};

const Normal = props => {
  const { children, sx } = props;

  return (
    <Grid sx={[styles.normal, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Grid>
  );
};

Normal.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Normal.defaultProps = {
  sx: {}
};

export default Normal;
