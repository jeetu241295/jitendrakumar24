import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = () => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  },
});

const AlternatePanel = props => {
  const { data, classes } = props;
  return (
    <Grid container spacing={32}>
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <React.Fragment key={item.id}>
              <Grid item xs={4}>
                <img src={item.img} alt={item.alt} className={classes.img} />
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
              <img src={item.img} alt={item.alt} className={classes.img} />
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

AlternatePanel.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};
AlternatePanel.defaultProps = {};

export default withStyles(styles)(AlternatePanel);
