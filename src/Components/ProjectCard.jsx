import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { GithubIcon } from '__ASSETS__/SVG';
import Normal from './Fonts/Normal';
import IconButton from './IconButton';

const styles = {
  card: {
    width: 300,
    margin: '0 2rem 7rem 2rem',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(2rem) scale(1.05)',
      boxShadow: 3
    }
  },
  icon: { color: 'common.black' },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: { xs: 0, sm: '0 2rem' },
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: 'colors.primary',
    color: 'common.black'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 'auto'
  },
  contentWrap: { padding: '8px 16px', height: 90 },
  content: {
    textAlign: 'justify'
  }
};

const ProjectCard = props => {
  const { project } = props;
  const { imgTitle, imgPath, projectDate, projectDescription, githubLink } =
    project;

  const splitWords = imgTitle.split(' ');
  let avatarWord;
  if (splitWords.length === 1) {
    avatarWord = splitWords[0].slice(0, 2).toUpperCase();
  } else {
    avatarWord = splitWords
      .map(word => word[0].toUpperCase())
      .join('')
      .slice(0, 2);
  }

  return (
    <Card sx={styles.card} raised>
      <CardHeader
        avatar={
          <Avatar aria-label="project" sx={styles.avatar}>
            {avatarWord}
          </Avatar>
        }
        title={
          <Typography component="h6" variant="subtitle1">
            {imgTitle}
          </Typography>
        }
        subheader={
          <Typography component="div" variant="caption">
            {projectDate}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={imgPath}
        title={imgTitle}
        onClick={() => window.open(imgPath)}
      />
      <CardContent sx={styles.contentWrap}>
        <Normal sx={styles.content}>{projectDescription}</Normal>
      </CardContent>
      <CardActions sx={styles.cardActions} disableSpacing>
        <IconButton
          sx={styles.icon}
          id="github-link"
          onClick={() => window.open(githubLink, '_blank')}
        >
          <GithubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

ProjectCard.defaultProps = {};

export default ProjectCard;
