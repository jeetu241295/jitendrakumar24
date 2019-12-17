import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from './Avatar';

const styles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block'
  }
}));

const AlternatePanel = props => {
  const { data } = props;
  const classes = styles(props);
  return (
    <Grid container spacing={4}>
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <React.Fragment key={item.id}>
              <Grid item xs={4}>
                <Avatar
                  src={item.img}
                  alt={item.alt}
                  className={classes.img}
                  big
                />
                {/* <img src={item.img} alt={item.alt} className={classes.img} /> */}
              </Grid>
              <Grid item xs={8}>
                {item.content}
              </Grid>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={item.id}>
            <Grid item xs={8}>
              {item.content}
            </Grid>
            <Grid item xs={4}>
              <Avatar
                src={item.img}
                alt={item.alt}
                className={classes.img}
                big
              />
              {/* <img src={item.img} alt={item.alt} className={classes.img} /> */}
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

AlternatePanel.propTypes = {
  data: PropTypes.array.isRequired
};
AlternatePanel.defaultProps = {};

export default AlternatePanel;
