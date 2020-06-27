import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Normal from '__SHARED__/Fonts/Normal';
import { CalenderIcon } from '../../../../Global/SVG';

const styles = makeStyles(theme => ({
  paper: {
    padding: '2rem',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.white,
    marginBottom: '3rem',
    border: '2px solid',
    transition: 'all .5s',
    '&:hover': {
      borderColor: theme.colors.mainAction,
      transform: 'scale(1.05) translateY(10px)'
    }
  },
  timeline: {
    display: 'flex'
  },
  period: {
    fontSize: '2rem',
    fontWeight: 500,
    marginTop: '.5rem',
    marginBottom: '.5rem'
  },
  IconIcon: {
    marginRight: '1rem'
  },
  place: {
    fontSize: '1.75rem',
    fontWeight: 500,
    marginTop: '.5rem'
  }
}));

const Card = props => {
  const { item } = props;
  const classes = styles();
  const isEducation = item.type === 'education';
  return (
    <Paper className={classes.paper}>
      <Grid className={classes.timeline}>
        <CalenderIcon />
        <Normal>{item.period}</Normal>
      </Grid>
      <Typography className={classes.period} variant="h4" componeent="h4">
        {isEducation ? item.degree : item.role}
      </Typography>
      <Normal>{item.context}</Normal>
      <Typography className={classes.place} variant="h6" componeent="h6">
        {isEducation ? item.place : item.company}
      </Typography>
    </Paper>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired
};
Card.defaultProps = {};

export default Card;
