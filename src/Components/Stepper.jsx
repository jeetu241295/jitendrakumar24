import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { StepIcon } from "@material-ui/core";
// import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import StepConnector from "@material-ui/core/StepConnector";

const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.colors.mainAction
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.colors.primary
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.colors.disabled
    }
  },
  connectorLine: {},
  rootIcon: {
    color: "blue",
    "&$completed": {
      color: "red"
    }
  },
  rootLabel: {
    "&$active": {
      color: "green"
    },
    "&$disabled": {
      color: "white"
    }
  },
  disabled: {},
  active: {},
  completed: {}
});

function getSteps() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} connector={connector}>
          {steps.map(label => (
            <Step
              key={label}
              classes={{
                root: classes.rootIcon,
                completed: classes.completed
              }}
            >
              <StepLabel
                classes={{
                  root: classes.rootLabel,
                  active: classes.active,
                  disabled: classes.disabled
                }}
                icon="1"
              />
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);

// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// // import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

// const styles = theme => ({
//   root: {
//     width: "90%"
//   },
//   backButton: {
//     marginRight: theme.spacing.unit
//   },
//   instructions: {
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit
//   }
// });

// function getSteps() {
//   return [
//     "Select master blaster campaign settings",
//     "Create an ad group",
//     "Create an ad"
//   ];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return "Select campaign settings...";
//     case 1:
//       return "What is an ad group anyways?";
//     case 2:
//       return "This is the bit I really care about!";
//     default:
//       return "Unknown stepIndex";
//   }
// }

// class HorizontalLabelPositionBelowStepper extends React.Component {
//   state = {
//     activeStep: 0
//   };

//   handleNext = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep + 1
//     }));
//   };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const steps = getSteps();
//     const { activeStep } = this.state;

//     return (
//       <div className={classes.root}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map(label => (
//             <Step key={label}>
//               <StepLabel
//                 icon="1"
//                 // icon={<AccessAlarmIcon {...this.props} />}
//               >
//                 {label}
//               </StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <div>
//           {this.state.activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>
//                 All steps completed
//               </Typography>
//               <Button onClick={this.handleReset}>Reset</Button>
//             </div>
//           ) : (
//             <div>
//               <Typography className={classes.instructions}>
//                 {getStepContent(activeStep)}
//               </Typography>
//               <div>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={this.handleBack}
//                   className={classes.backButton}
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={this.handleNext}
//                 >
//                   {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// HorizontalLabelPositionBelowStepper.propTypes = {
//   classes: PropTypes.object
// };

// export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
