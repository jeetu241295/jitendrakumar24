import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, Grid, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: '2rem'
  }
}));

const FullWidthTabs = props => {
  const [value, setValue] = useState(0);

  const handleChange = (event, value1) => {
    setValue(value1);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const { tabs, tabContainerStyle } = props;
  const classes = styles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {tabs.map(item => (
            <Tab key={item.id} label={item.label} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map(item => (
          <Grid
            className={classNames(tabContainerStyle, classes.tabContent)}
            key={item.id}
            dir={theme.direction}
            container
          >
            {item.content}
          </Grid>
        ))}
      </SwipeableViews>
    </div>
  );
};

FullWidthTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabContainerStyle: PropTypes.string
};

FullWidthTabs.defaultProps = {
  tabContainerStyle: null
};

export default FullWidthTabs;
