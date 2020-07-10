import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles(theme => ({
  title: {
    color: theme.colors.mainAction,
    fontSize: '1.75rem',
    letterSpacing: 1.25,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  intrestWrap: {
    display: 'inline-block'
  },
  avatar: {
    width: '12rem',
    height: '12rem',
    float: 'left',
    shapeOutside: 'circle(50% at 50% 50%)',
    marginRight: '3rem'
  },
  text: {
    textAlign: 'justify',
    fontSize: '1.5rem'
  }
}));

const Intrests = props => {
  const { intrests } = props;
  const classes = styles();
  return (
    <Grid container spacing={5}>
      {intrests.map(item => (
        <Grid item xs={12} key={item.id} className={classes.intrestWrap}>
          <Avatar alt="image1" src={item.avatar} className={classes.avatar} />
          <Grid className={classes.title}>{item.title}</Grid>
          <Grid className={classes.text}>{item.content}</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

Intrests.propTypes = {
  intrests: PropTypes.array.isRequired
};

Intrests.defaultPtops = {};

export default Intrests;
