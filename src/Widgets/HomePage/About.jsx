import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ProgressBar from '__SHARED__/ProgressBar';
import Button from '__SHARED__/Button';
import HandFont from '__SHARED__/Fonts/HandFont';
import { useNavigate } from 'react-router-dom';
import { about, skills } from '../_helpers/constants';

const styles = {
  about: {
    display: 'flex',
    padding: { xs: '1.5rem', sm: '3rem', md: '7rem' },
    alignItems: 'flex-start'
  },
  skills: {
    padding: { xs: '1rem', sm: '0.5rem', md: '2.5rem' }
  },
  skillsTitle: {
    position: 'relative',
    padding: { xs: '1rem', sm: '0.5rem', md: '2.5rem' }
  },
  aboutMe: {
    position: 'relative',
    padding: { xs: '0.5rem', md: '2.5rem' },
    alignSelf: 'center',
    margin: { xs: '1rem 0', sm: '0 0 2rem 0' }
  },
  titleBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '2px',
    height: '2px',
    width: '3rem',
    margin: { xs: 0, md: '2rem' },
    backgroundColor: 'primary.main'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 500
  },
  hire: {
    color: 'common.black',
    borderRadius: '50px',
    padding: '0.5rem 2rem'
  },
  resume: {
    color: 'common.white',
    borderRadius: '50px',
    backgroundColor: 'colors.buttonColor',
    marginLeft: '1rem',
    padding: '0.5rem 2rem',
    '&:hover': {
      backgroundColor: 'colors.buttonColor'
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: { xs: '1rem', sm: 0 }
  },
  description: {
    margin: { xs: '1rem', sm: '2rem 0' },
    textAlign: 'justify',
    lineHeight: { xs: '2.25rem', sm: 'inherit' }
  },
  more: {
    color: 'common.black',
    borderRadius: '50px',
    padding: '0.5rem 2rem',
    marginLeft: '1rem',
    marginTop: { xs: '.5rem', sm: 0 }
  }
};

const About = props => {
  const { downloadCV } = props;
  const naviagte = useNavigate();

  return (
    <Grid container sx={styles.about}>
      <Grid sx={styles.aboutMe} item xs={12}>
        <Grid sx={styles.titleBorder} />
        <Typography sx={styles.title} variant="h3" component="h3">
          About Me
        </Typography>
        {about.map(item => (
          <HandFont sx={styles.description} key={item.id}>
            &emsp; {item.content}
          </HandFont>
        ))}
        <Grid sx={styles.buttons}>
          <Button
            sx={styles.hire}
            color="secondary"
            onClick={() => naviagte('/contact')}
          >
            Hire Me
          </Button>
          <Button sx={styles.resume} onClick={downloadCV}>
            Download CV
          </Button>
          <Button
            color="primary"
            sx={styles.more}
            onClick={() => naviagte('/about')}
          >
            More About Me
          </Button>
        </Grid>
      </Grid>
      <Grid sx={styles.skillsTitle} item sm={4} xs={12}>
        <Grid sx={styles.titleBorder} />
        <Typography sx={styles.title} variant="h3" component="h3">
          My Skills
        </Typography>
      </Grid>
      <Grid sx={styles.skills} item sm={8} xs={12}>
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
  downloadCV: PropTypes.func.isRequired
};
About.defaultProps = {};

export default About;
