import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Tabs from '__SHARED__/Tabs';
import { renderDetails, renderImages } from './RenderImagesDetails';
import Personal from './Personal';
import { offices } from '../../constants';

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

function AboutPage() {
  const theme = useTheme();
  const isBelowMD = useMediaQuery(theme.breakpoints.down('md'));

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
      content: <Personal isBelowMD={isBelowMD} />
    }
  ];

  return (
    <Grid container sx={styles.about}>
      <Grid item xs={12}>
        <Tabs tabs={tabs} tabContainerStyle={styles.tabs} variant="fullWidth" />
      </Grid>
    </Grid>
  );
}

AboutPage.propTypes = {};
AboutPage.defaultProps = {};

export default AboutPage;
