import React from 'react';
import PropTypes from 'prop-types';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

const styles = {
  root: {
    flexGrow: 1
  },
  selected: {
    color: 'primary.main'
  },
  speedDial: {
    position: 'absolute',
    bottom: 2,
    right: 2
  }
};

const SpeedDialJK = props => {
  const { sx, hidden, actions, icon, active, onOpen } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={styles.root}>
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
            sx={{
              fab: active === index && styles.selected,
              staticTooltipLabel: active === index && styles.selected
            }}
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
    </div>
  );
};

SpeedDialJK.propTypes = {
  active: PropTypes.number.isRequired,
  actions: PropTypes.array.isRequired,
  icon: PropTypes.node,
  onOpen: PropTypes.func,
  hidden: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

SpeedDialJK.defaultProps = {
  icon: null,
  onOpen: false,
  hidden: false,
  sx: {}
};

export default SpeedDialJK;
