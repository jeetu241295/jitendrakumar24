import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'class-names';

const styles = theme => ({
  normal: {
    color: theme.colors.calenderColor,
    fontSize: '1.5rem',
  },
});

const Normal = props => {
  const { classes, children, className } = props;
  return (
    <Grid className={classNames(classes.normal, className)}>{children}</Grid>
  );
};

Normal.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  className: PropTypes.object.isRequired,
};
Normal.defaultProps = {};

export default withStyles(styles)(Normal);
