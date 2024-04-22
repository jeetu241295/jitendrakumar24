import React from 'react';
import PropTypes from 'prop-types';
import { SpeedDial, Grid, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const styles = {
  root: {
    flexGrow: 1
  },
  selected: {
    color: 'colors.mainAction'
  },
  speedDial: {
    position: 'absolute',
    bottom: theme => theme.spacing(2),
    right: theme => theme.spacing(2)
  }
};

function SpeedDialJK(props) {
  const { hidden, sx, actions, icon, active, onOpen } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid sx={styles.root}>
      <SpeedDial
        ariaLabel="SpeedDial Tab"
        sx={[styles.speedDial, ...(Array.isArray(sx) ? sx : [sx])]}
        hidden={hidden}
        icon={<SpeedDialIcon icon={icon} />}
        onClose={handleClose}
        onOpen={() => {
          handleOpen();
          onOpen();
        }}
        open={open}
        FabProps={{
          size: 'medium'
        }}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            sx={[active === index && styles.selected]}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              handleClose();
              action.onClick();
            }}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

SpeedDialJK.propTypes = {
  active: PropTypes.number.isRequired,
  actions: PropTypes.array.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  icon: PropTypes.node,
  onOpen: PropTypes.func,
  hidden: PropTypes.bool
};

SpeedDialJK.defaultProps = {
  sx: {},
  icon: null,
  onOpen: false,
  hidden: false
};

export default SpeedDialJK;
