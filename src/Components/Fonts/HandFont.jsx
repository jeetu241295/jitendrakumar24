import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const styles = {
  handFont: {
    color: 'colors.textColor',
    fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' },
    fontFamily: 'Indie Flower, cursive',
    lineHeight: { xs: '2rem', md: '2.5rem' }
  }
};

function HandFont(props) {
  const { children, sx } = props;

  return (
    <Grid sx={[styles.handFont, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Grid>
  );
}

HandFont.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};
HandFont.defaultProps = {
  sx: {}
};

export default HandFont;
