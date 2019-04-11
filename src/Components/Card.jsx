import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/Styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Tooltip from '@material-ui/core/Tooltip';
import SnackBar from './SnackBar';
import themeCSS from '../Global/theme';

const styles = theme => ({
  card: {
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
  media: {
    height: 140,
  },
});

const MediaCard = props => {
  const { classes, item } = props;
  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea disabled>
        <CardMedia
          className={classes.media}
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography component="p">{item.content}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            copyToClipboard('jitendrakumar24.tech/about/personal/ronaldo');
            ReactDOM.render(
              <MuiThemeProvider theme={themeCSS}>
                <SnackBar message="Link Copied !" open />
              </MuiThemeProvider>,
              document.getElementById('snackbar'),
            );
          }}
        >
          Share
        </Button>
        <Tooltip title="Page Development in Progress" placement="top">
          <Button size="small" color="primary">
            Explore More
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
