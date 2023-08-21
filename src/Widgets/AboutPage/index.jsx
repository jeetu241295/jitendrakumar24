import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from '__SHARED__/Tabs';
import { renderDetails, renderImages } from './RenderImagesDetails';
import Personal from './Personal';
import { offices } from '../_helpers/constants';

const styles = {
  about: {
    padding: '2rem',
    paddingTop: '8rem',
    flex: 1
  },
  summaryTitle: {
    color: 'common.black',
    marginLeft: '1rem'
  },
  tabs: {
    overflow: 'hidden'
  }
};

const AboutPage = props => {
  const theme = useTheme();
  const isBelowMD = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    {
      id: 1,
      label: 'Career',
      content: offices.map((item, index) => {
        const isOffice = true;
        if (index % 2 === 0 || isBelowMD)
          return (
            <React.Fragment key={item.id}>
              {renderDetails(item, isOffice)}
              {renderImages(item)}
            </React.Fragment>
          );
        return (
          <React.Fragment key={item.id}>
            {renderImages(item)}
            {renderDetails(item, isOffice)}
          </React.Fragment>
        );
      })
    },
    {
      id: 2,
      label: 'Personal',
      disablePadding: true,
      content: <Personal {...props} isBelowMD={isBelowMD} />
    }
  ];

  return (
    <Grid container sx={styles.about}>
      <Grid item xs={12}>
        <Tabs tabs={tabs} tabContainerStyle={styles.tabs} variant="fullWidth" />
      </Grid>
    </Grid>
  );
};

AboutPage.propTypes = {
  trips: PropTypes.array.isRequired,
  offices: PropTypes.array.isRequired
};
AboutPage.defaultProps = {};

export default AboutPage;
