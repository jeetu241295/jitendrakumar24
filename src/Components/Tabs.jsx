import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = makeStyles(() => ({
  tabContent: {
    padding: '2rem'
  },
  root: {
    flexGrow: 1
  },
  appbar: {
    transform: 'none',
    zIndex: 1
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  labelIcon: {
    minHeight: props => (props.orientation === 'vertical' ? 'unset' : 72)
  }
}));

const FullWidthTabs = props => {
  const [value, setValue] = useState(0);

  const handleChange = (event, value1) => {
    setValue(value1);
  };

  const { tabs, tabContainerStyle, orientation, appbarExists, variant } = props;
  const classes = styles(props);
  const isVertical = orientation === 'vertical';
  const slideDirection = orientation === 'vertical' ? 'up' : 'left';

  const x = (
    <Tabs
      orientation={orientation}
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant={variant}
    >
      {tabs.map(item => (
        <Tab
          key={item.id}
          classes={{ wrapper: classes.wrapper, labelIcon: classes.labelIcon }}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </Tabs>
  );
  return (
    <Grid className={classes.root} container>
      <Grid
        item
        xl={isVertical && 1}
        md={isVertical && 2}
        sm={isVertical && 3}
        xs={12}
      >
        {appbarExists ? (
          <AppBar className={classes.appbar} position="static" color="default">
            {x}
          </AppBar>
        ) : (
          x
        )}
      </Grid>
      <Grid
        item
        xl={isVertical && 11}
        md={isVertical && 10}
        sm={isVertical && 9}
        xs={12}
      >
        {tabs.map((item, index) => (
          <Slide
            key={item.id}
            direction={slideDirection}
            in={value === index}
            mountOnEnter
            unmountOnExit
          >
            <Grid
              className={classNames(tabContainerStyle, {
                [classes.tabContent]: !item.disablePadding
              })}
              container
            >
              {item.content}
            </Grid>
          </Slide>
        ))}
      </Grid>
    </Grid>
  );
};

FullWidthTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabContainerStyle: PropTypes.string,
  appbarExists: PropTypes.bool,
  orientation: PropTypes.string,
  variant: PropTypes.string
};

FullWidthTabs.defaultProps = {
  appbarExists: true,
  tabContainerStyle: null,
  orientation: 'horizontal',
  variant: 'standard'
};

export default FullWidthTabs;
