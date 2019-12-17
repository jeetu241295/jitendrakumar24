import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  summary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.footerNav
  }
}));

const ControlledExpansionPanels = props => {
  const [expanded, setExpanded] = useState(1);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { data, expandIconRoot, defaultOpen } = props;
  const classes = styles();
  return (
    <div className={classes.root}>
      {data.map(item => {
        if (item.id === defaultOpen) {
          handleChange(item.id);
        }
        return (
          <ExpansionPanel
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <ExpansionPanelSummary
              className={classes.summary}
              expandIcon={
                expandIconRoot || item.expandItemIcon || <ExpandMoreIcon />
              }
            >
              {item.summary}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{item.details}</ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

ControlledExpansionPanels.propTypes = {
  data: PropTypes.array.isRequired,
  defaultOpen: PropTypes.number,
  expandIconRoot: PropTypes.node
};
ControlledExpansionPanels.defaultProps = {
  expandIconRoot: null,
  defaultOpen: -1
};

export default ControlledExpansionPanels;
