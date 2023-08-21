import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Hidden, Slide, Grid, AppBar, Tabs, Tab } from '@mui/material';
import { VerticalMenuIcon } from '__ASSETS__/SVG';
import SpeedDial from './Speeddial';

const styles = {
  tab: {
    '&:hover': {
      color: 'common.black'
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: 3,
      backgroundColor: 'primary.main',
      transform: 'scaleY(0)',
      transition:
        'transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, backgroundColor 0.1s'
    },
    '&:hover::before': {
      width: '100%',
      transform: 'scaleY(1)'
    }
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
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'bold',
    zIndex: props => (props.styled ? 10 : 1)
  },
  labelIcon: {
    minHeight: props => (props.orientation === 'vertical' ? 'unset' : 72)
  },
  tabsSpeedDial: {
    position: 'fixed',
    bottom: 30,
    right: 25,
    animationName: '$danceDial',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationPlayState: props => (!props.animation ? 'paused' : 'running')
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
  // const [animation, setAnimation] = useState(true);

  const handleChange = value1 => setValue(value1);

  const {
    tabs,
    sx,
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
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
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
            key={item.id}
            sx={{
              root: styled && styles.tab,
              wrapper: styles.wrapper,
              labelIcon: styles.labelIcon
            }}
            disabled={item.disabled}
            label={item.label}
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
          <Hidden xsDown>
            <Grid item xl={1} md={2} sm={3}>
              {tabsData}
            </Grid>
          </Hidden>
          <Hidden smUp>
            <SpeedDial
              sx={styles.tabsSpeedDial}
              actions={actions}
              active={value}
              icon={<VerticalMenuIcon width={22} />}
              // onOpen={() => setAnimation(false)}
            />
          </Hidden>
        </React.Fragment>
      ) : (
        <Grid item xs={12}>
          {tabsData}
        </Grid>
      )}
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
  styled: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

FullWidthTabs.defaultProps = {
  appbarExists: true,
  tabContainerStyle: null,
  orientation: 'horizontal',
  variant: 'standard',
  styled: false,
  sx: {}
};

export default FullWidthTabs;
