import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  handFont: {
    color: theme.colors.calenderColor,
    fontSize: '1.5rem',
    fontFamily: 'Indie Flower, cursive'
  }
});

const HandFont = props => {
  const { classes, children, className } = props;
  return (
    <Grid className={classNames(classes.handFont, className)}>{children}</Grid>
  );
};

HandFont.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
HandFont.defaultProps = {
  className: ''
};

export default withStyles(styles)(HandFont);
