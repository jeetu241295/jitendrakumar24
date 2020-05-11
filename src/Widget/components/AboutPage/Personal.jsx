import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '../../../Components/Tabs';
import { renderDetails, renderImages } from './RenderImagesDetails';
import { TripsIcon, IntrestsIcon } from '../../../Global/SVG';

const styles = makeStyles(() => ({
  content: {
    padding: '2rem 1rem'
  }
}));

const Personal = props => {
  const { trips } = props;
  const classes = styles();

  const tabs = [
    {
      id: 1,
      label: 'Intrests',
      icon: <IntrestsIcon width={24} height={24} />,
      content:
        'Work in progress. Try next, you might find something intresting..!'
    },
    {
      id: 2,
      label: 'Trips',
      icon: <TripsIcon width={32} height={32} />,
      content: trips.map((item, index) => {
        if (index % 2 === 0)
          return (
            <React.Fragment key={item.id}>
              {renderDetails(item)}
              {renderImages(item)}
            </React.Fragment>
          );
        return (
          <React.Fragment key={item.id}>
            {renderImages(item)}
            {renderDetails(item)}
          </React.Fragment>
        );
      })
    }
  ];

  return (
    <Grid container spacing={2} className={classes.abc}>
      <Grid item xs={12}>
        <Tabs orientation="vertical" appbarExists={false} tabs={tabs} styled />
      </Grid>
    </Grid>
  );
};

Personal.propTypes = {
  trips: PropTypes.array.isRequired
};
Personal.defaultProps = {};
export default Personal;
