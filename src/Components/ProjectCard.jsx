import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import Normal from './Normal';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    marginBottom: '2rem',
    height: 350,
    transform: 'rotateY(0deg)',
    transformOrigin: '50% 0%',
    transition: '2s all',
    '&:hover': {
      transform: 'rotateY(180deg)'
    }
  },
  backText: {
    transform: 'rotateY(360deg)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: theme.colors.primary
  }
}));

const ProjectCard = props => {
  const { project } = props;
  const { imgTitle, imgPath, projectDate, projectDescription } = project;
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyles();
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

  const mouseEnter = () => {
    setTimeout(() => setIsHovered(true), 600);
  };

  const mouseLeft = () => {
    setTimeout(() => setIsHovered(false), 600);
  };

  return (
    <Card
      className={classes.card}
      raised
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeft}
    >
      {isHovered ? (
        <div className={classes.backText}>test</div>
      ) : (
        <React.Fragment>
          <CardHeader
            avatar={
              <Avatar aria-label="project" className={classes.avatar}>
                {avatarWord}
              </Avatar>
            }
            title={imgTitle}
            subheader={projectDate}
          />
          <CardMedia
            className={classes.media}
            image={imgPath}
            title={imgTitle}
          />
          <CardContent>
            <Normal>{projectDescription}</Normal>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions> */}
        </React.Fragment>
      )}
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

ProjectCard.defaultProps = {};

export default ProjectCard;
