import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from '__SHARED__/ProjectCard';
import { projects } from '../constants';

const styles = {
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
};

const Projects = () => {
  return (
    <Grid container sx={styles.about}>
      {projects.map(project => (
        <Grid
          key={project.id}
          sx={styles.projectWrap}
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

Projects.propTypes = {};
Projects.defaultProps = {};

export default Projects;
