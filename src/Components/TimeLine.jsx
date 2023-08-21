import React from 'react';
import PropTypes from 'prop-types';
import {
  Timeline,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineItem
} from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import Normal from './Fonts/Normal';

const styles = {
  paper: {
    padding: '12px 16px'
  },
  transparentConnector: {
    backgroundColor: 'colors.transparent'
  },
  normalText: {
    textAlign: 'justify'
  },
  verticallyCenter: {
    margin: 'auto 0'
  },
  period: {
    fontSize: '1.75rem',
    fontWeight: 500,
    marginTop: '.5rem',
    marginBottom: '.5rem'
  },
  icon: {
    margin: 0
  }
};

const TimeLineJK = props => {
  const { position, data, sx } = props;

  return (
    <Timeline sx={[...(Array.isArray(sx) ? sx : [sx])]} position={position}>
      {data.map((item, index) => {
        return (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent sx={styles.verticallyCenter}>
              {item.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={[index === 0 && styles.transparentConnector]}
              />
              <TimelineDot variant="outlined" color="primary">
                {item.icon}
              </TimelineDot>
              <TimelineConnector
                sx={[data.length - 1 === index && styles.transparentConnector]}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={styles.paper}>
                <Typography sx={styles.period} variant="h6" component="div">
                  {item.title}
                </Typography>
                <Normal sx={styles.normalText}>{item.context}</Normal>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

TimeLineJK.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.oneOf(['alternate', 'left', 'right']),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

TimeLineJK.defaultProps = {
  position: 'alternate',
  sx: {}
};

export default TimeLineJK;
