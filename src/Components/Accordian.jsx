import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  summary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.footerNav,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: 1,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes, data, expandIconRoot, defaultOpen } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.root}>
        {data.map(item => {
          if (item.id === defaultOpen) {
            this.handleChange(item.id);
          }
          return (
            <ExpansionPanel
              key={item.id}
              expanded={expanded === item.id}
              onChange={this.handleChange(item.id)}
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
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  defaultOpen: PropTypes.number,
  expandIconRoot: PropTypes.node,
};
ControlledExpansionPanels.defaultProps = {
  expandIconRoot: null,
  defaultOpen: -1,
};

export default withStyles(styles)(ControlledExpansionPanels);
