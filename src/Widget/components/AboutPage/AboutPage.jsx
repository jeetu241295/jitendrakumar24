import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { renderDetails, renderImages } from './RenderImagesDetails';
import Tabs from '../../../Components/Tabs';
import Personal from './Personal';

const styles = makeStyles(theme => ({
  about: {
    padding: '2rem',
    paddingTop: '8rem',
    flex: 1
  },
  summaryTitle: {
    color: theme.colors.black,
    marginLeft: '1rem'
  },
  tabs: {
    overflow: 'hidden'
  }
}));

const AboutPage = props => {
  const classes = styles();
  const { offices } = props;

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
    <Grid container className={classes.about}>
      <Grid item xs={12}>
        <Tabs
          tabs={tabs}
          tabContainerStyle={classes.tabs}
          variant="fullWidth"
        />
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
