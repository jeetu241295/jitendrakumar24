import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProgressBar from '../../../../Components/ProgressBar';
import Button from '../../../../Components/Button';
import aboutImg from '../../../../static/images/about.jpg';

const styles = theme => ({
  about: {
    display: 'flex',
    padding: '7rem',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      padding: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.5rem'
    }
  },
  imageWrap: {
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    },
    padding: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
      padding: 0
    }
  },
  skills: {
    padding: '2.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0.5rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem'
    }
  },
  skillsTitle: {
    position: 'relative',
    padding: '2.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0.5rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      marginBottom: '1rem'
    }
  },
  aboutMe: {
    position: 'relative',
    padding: '2.5rem',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '0.5rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      marginBottom: '1rem'
    }
  },
  titleBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '2px',
    height: '2px',
    width: '3rem',
    margin: '2rem',
    backgroundColor: theme.colors.mainAction,
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
  },
  title: {
    fontSize: '2rem',
    fontWeight: 500
  },
  hire: {
    borderRadius: '50px',
    padding: '0.5rem 2rem',
    '&:hover': {
      color: theme.colors.white
    }
  },
  resume: {
    borderRadius: '50px',
    backgroundColor: theme.colors.buttonColor,
    marginLeft: '1rem',
    padding: '0.5rem 2rem',
    '&:hover': {
      color: theme.colors.white,
      backgroundColor: theme.colors.buttonColor
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    }
  },
  description: {
    fontSize: '1.5rem',
    margin: '2rem 0',
    textAlign: 'justify',
    lineHeight: '2rem',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      lineHeight: '1.5rem'
    }
  },
  more: {
    backgroundColor: theme.colors.mainAction,
    borderRadius: '50px',
    padding: '0.5rem 2rem',
    '&:hover': {
      color: theme.colors.white,
      backgroundColor: theme.colors.mainAction
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '.5rem'
    },
    marginLeft: '1rem'
  }
});

const About = props => {
  const { classes, skills, about, history } = props;
  return (
    <Grid container className={classes.about}>
      <Grid className={classes.imageWrap} item sm={5} xs={12}>
        <img src={aboutImg} alt="My Pic" />
      </Grid>
      <Grid className={classes.aboutMe} item sm={7} xs={12}>
        <Grid className={classes.titleBorder} />
        <Typography className={classes.title} variant="h3" component="h3">
          About Me
        </Typography>
        {about.map(item => (
          <Typography
            className={classes.description}
            variant="body1"
            component="p"
            key={item.id}
          >
            &emsp; {item.content}
          </Typography>
        ))}
        <Grid className={classes.buttons}>
          <Button
            type={1}
            className={classes.hire}
            onClick={() => history.push('/contact')}
          >
            Hire Me
          </Button>
          <Button type={1} className={classes.resume} onClick={() => {}}>
            Download CV
          </Button>
          <Button
            type={1}
            className={classes.more}
            onClick={() => {
              history.push('/about');
            }}
          >
            More About Me
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.skillsTitle} item sm={4} xs={12}>
        <Grid className={classes.titleBorder} />
        <Typography className={classes.title} variant="h3" component="h3">
          My Skills
        </Typography>
      </Grid>
      <Grid className={classes.skills} item sm={8} xs={12}>
        {skills.map(skill => (
          <ProgressBar
            key={skill.title}
            heading={skill.title}
            value={skill.value}
          />
        ))}
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  about: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};
About.defaultProps = {};

export default withStyles(styles)(About);
