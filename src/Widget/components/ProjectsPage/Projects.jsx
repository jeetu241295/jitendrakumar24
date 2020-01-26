import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const styles = makeStyles(() => ({
  about: {
    padding: '2rem',
    paddingTop: '8rem',
    minHeight: '85vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  projectWrap: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    fontSize: '3rem'
  }
}));

const Projects = props => {
  const { projects } = props;
  const classes = styles(props);
  return (
    <Grid container className={classes.about}>
      {projects.map(project => (
        <Grid
          key={project.id}
          className={classes.projectWrap}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};
Projects.defaultProps = {};

export default Projects;
