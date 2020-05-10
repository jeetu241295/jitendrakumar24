import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  handFont: {
    color: theme.colors.calenderColor,
    fontSize: '1.5rem',
    fontFamily: 'Indie Flower, cursive'
  }
}));

const HandFont = props => {
  const { children, className } = props;
  const classes = styles();
  return (
    <Grid className={classNames(classes.handFont, className)}>{children}</Grid>
  );
};

HandFont.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
HandFont.defaultProps = {
  className: ''
};

export default HandFont;
