import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Tabs from '__SHARED__/Tabs';
import { TripsIcon, IntrestsIcon } from '__ASSETS__/SVG';
import Intrests from './Intrests';
import { renderDetails, renderImages } from './RenderImagesDetails';
import { trips } from '../../constants';

const styles = {
  content: {
    padding: '2rem 1rem'
  }
};

function Personal(props) {
  const { isBelowMD } = props;

  const tabs = [
    {
      id: 1,
      label: 'Intrests',
      icon: <IntrestsIcon width={24} height={24} />,
      content: <Intrests />
    },
    {
      id: 2,
      label: 'Trips',
      icon: <TripsIcon width={32} height={32} />,
      content: trips.map((item, index) => {
        const disablePadding = true;
        if (index % 2 === 0 || isBelowMD)
          return (
            <React.Fragment key={item.id}>
              {renderDetails(item)}
              {renderImages(item, disablePadding, true)}
            </React.Fragment>
          );
        return (
          <React.Fragment key={item.id}>
            {renderImages(item, disablePadding, true)}
            {renderDetails(item)}
          </React.Fragment>
        );
      })
    }
  ];

  return (
    <Grid container spacing={2} sx={styles.abc}>
      <Grid item xs={12}>
        <Tabs orientation="vertical" appbarExists={false} tabs={tabs} styled />
      </Grid>
    </Grid>
  );
}

Personal.propTypes = {
  isBelowMD: PropTypes.bool.isRequired
};
Personal.defaultProps = {};
export default Personal;
