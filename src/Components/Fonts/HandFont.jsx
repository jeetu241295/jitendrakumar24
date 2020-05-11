import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  handFont: {
    color: theme.colors.textColor,
    fontSize: '1.75rem',
    fontFamily: 'Indie Flower, cursive',
    lineHeight: '2.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
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
