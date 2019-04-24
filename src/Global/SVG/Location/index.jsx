import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'class-names';
import LocationSVG from './location2.svg';
import styles from '../styles.css';

const Location = ({ classes }) => {
  return (
    <LocationSVG
      className={classNames(classes.whiteColor, classes.location)}
      height={32}
      width={32}
    />
  );
};
Location.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Location);
