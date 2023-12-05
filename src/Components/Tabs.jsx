import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@mui/material/Hidden';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { VerticalMenuIcon } from '__ASSETS__/SVG';
import SpeedDial from './Speeddial';
import Normal from './Fonts/Normal';

const styles = {
  tab: {
    '&.Mui-selected div': {
      color: 'colors.mainAction'
    },
    '&.Mui-selected:hover div': {
      color: 'common.black'
    },
    '&:hover': {
      zIndex: 10,
      color: 'common.black',
      '& > *': {
        zIndex: 10,
        color: 'common.black'
      }
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: 3,
      backgroundColor: 'colors.mainAction',
      transform: 'scaleY(0)',
      transition:
        'transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, backgroundColor 0.1s'
    },
    '&:hover::before': {
      width: '100%',
      transform: 'scaleY(1)'
    }
  },
  verticalTab: {
    minHeight: 50,
    p: 0
  },
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
  styledWrapper: {
    zIndex: 10
  },
  tabsSpeedDial: {
    position: 'fixed',
    bottom: 30,
    right: 25,
    animationName: '$danceDial',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationPlayState: 'running'
  },
  label: {
    color: 'common.black'
  },
  animatedDial: {
    animationPlayState: 'paused'
  },
  '@keyframes danceDial': {
    '0%': {
      transform: 'translateY(0px)'
    },
    '45%': {
      transform: 'translateY(20px)'
    },
    '70%': {
      transform: 'translateY(0px)'
    },
    '85%': {
      transform: 'translateY(5px)'
    },
    '100%': {
      transform: 'translateY(0px)'
    }
  }
};

const FullWidthTabs = props => {
  const [value, setValue] = useState(0);
  const [animation, setAnimation] = useState(true);

  const handleChange = value1 => setValue(value1);

  const {
    tabs,
    tabContainerStyle,
    orientation,
    appbarExists,
    variant,
    styled
  } = props;

  const isVertical = orientation === 'vertical';
  const slideDirection = orientation === 'vertical' ? 'up' : 'left';
  const actions = [];

  const x = (
    <Tabs
      orientation={orientation}
      value={value}
      onChange={(e, value1) => handleChange(value1)}
      indicatorColor="primary"
      textColor="primary"
      variant={variant}
    >
      {tabs.map((item, index) => {
        actions.push({
          icon: item.icon,
          name: item.label,
          onClick: () => handleChange(index)
        });
        return (
          <Tab
            iconPosition="start"
            sx={[styled && styles.tab, isVertical && styles.verticalTab]}
            key={item.id}
            disabled={item.disabled}
            label={<Normal sx={styles.label}>{item.label}</Normal>}
            icon={item.icon}
          />
        );
      })}
    </Tabs>
  );
  const tabsData = appbarExists ? (
    <AppBar sx={styles.appbar} position="static" color="transparent">
      {x}
    </AppBar>
  ) : (
    x
  );

  return (
    <Grid sx={styles.root} container>
      {isVertical ? (
        <React.Fragment>
          <Hidden mdDown>
            <Grid item xl={1} md={2} sm={3}>
              {tabsData}
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <SpeedDial
              sx={[styles.tabsSpeedDial, animation && styles.animatedDial]}
              actions={actions}
              active={value}
              icon={<VerticalMenuIcon width={22} />}
              onOpen={() => setAnimation(false)}
            />
          </Hidden>
        </React.Fragment>
      ) : (
        <Grid item xs={12}>
          {tabsData}
        </Grid>
      )}
      <Grid item xl={isVertical && 11} md={isVertical && 10} xs={12}>
        {tabs.map((item, index) => (
          <Slide
            key={item.id}
            direction={slideDirection}
            in={value === index}
            mountOnEnter
            unmountOnExit
          >
            <Grid
              sx={[
                tabContainerStyle,
                !item.disablePadding && styles.tabContent
              ]}
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
  variant: PropTypes.string,
  styled: PropTypes.bool
};

FullWidthTabs.defaultProps = {
  appbarExists: true,
  tabContainerStyle: null,
  orientation: 'horizontal',
  variant: 'standard',
  styled: false
};

export default FullWidthTabs;
