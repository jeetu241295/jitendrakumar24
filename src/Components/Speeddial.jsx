import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { checkIsMobile } from '../Global/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    height: 380,
    flexGrow: 1
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const SpeedDialJK = props => {
  const { hidden, className, actions } = props;
  const classes = useStyles();
  let isMobile = false;
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    isMobile = checkIsMobile();
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial Tab"
        className={classNames(classes.speedDial, className)}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          size: 'medium'
        }}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            delay={10}
            tooltipOpen={isMobile} // needs to be true only on mobile
            onClick={() => {
              handleClose();
              action.onClick();
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

SpeedDialJK.propTypes = {
  actions: PropTypes.array.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool
};

SpeedDialJK.defaultProps = {
  className: null,
  hidden: false
};

export default SpeedDialJK;
