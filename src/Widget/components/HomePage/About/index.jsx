import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProgressBar from '__SHARED__/ProgressBar';
import Button from '__SHARED__/Button';
import HandFont from '__SHARED__/Fonts/HandFont';

const styles = makeStyles(theme => ({
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
    marginBottom: '2rem',
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
    padding: '0.5rem 2rem'
  },
  resume: {
    color: theme.colors.white,
    borderRadius: '50px',
    backgroundColor: theme.colors.buttonColor,
    marginLeft: '1rem',
    padding: '0.5rem 2rem',
    '&:hover': {
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
    margin: '2rem 0',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
      lineHeight: '2.25rem'
    }
  },
  more: {
    borderRadius: '50px',
    padding: '0.5rem 2rem',
    marginLeft: '1rem',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '.5rem'
    }
  }
}));

const About = props => {
  const { skills, about, history, downloadCV } = props;
  const classes = styles();
  return (
    <Grid container className={classes.about}>
      <Grid className={classes.aboutMe} item xs={12}>
        <Grid className={classes.titleBorder} />
        <Typography className={classes.title} variant="h3" component="h3">
          About Me
        </Typography>
        {about.map(item => (
          <HandFont className={classes.description} key={item.id}>
            &emsp; {item.content}
          </HandFont>
        ))}
        <Grid className={classes.buttons}>
          <Button
            className={classes.hire}
            color="secondary"
            onClick={() => history.push('/contact')}
          >
            Hire Me
          </Button>
          <Button className={classes.resume} onClick={downloadCV}>
            Download CV
          </Button>
          <Button
            color="primary"
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
  downloadCV: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
  about: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};
About.defaultProps = {};

export default About;
