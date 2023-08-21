import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '__SHARED__/Dialog';
import Button from '__SHARED__/Button';

const styles = {
  listItem: {
    padding: 0
  },
  cancel: {
    marginRight: '1rem'
  }
};

const MessageModal = props => {
  const {
    ratingValue,
    messageOpen,
    submitMessage,
    submitLoader,
    toggleSuggestionDialog,
    setRatingValue
  } = props;
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const onClose = () => {
    setRatingValue(0);
    toggleSuggestionDialog(false);
  };

  return (
    <Dialog
      disableBackdropClick
      title="Feedback"
      open={messageOpen}
      onClose={onClose}
      buttons={[
        <Button
          key={2}
          sx={styles.cancel}
          onClick={onClose}
          variant="outlined"
          color="secondary"
        >
          Cancel
        </Button>,
        <Button
          key={1}
          onClick={() => {
            submitLoader();
            submitMessage(ratingValue, name, review);
            setRatingValue(0);
          }}
          variant="outlined"
          color="primary"
        >
          Submit
        </Button>
      ]}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List subheader="Note: " disablePadding>
            <ListItem disableGutters sx={styles.listItem}>
              <ListItemText primary="1. Fields are not Mandatory." />
            </ListItem>
            <ListItem disableGutters sx={styles.listItem}>
              <ListItemText primary="2.Please submit,otherwise rating will not be sent." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            size="small"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Review"
            rows={4}
            variant="outlined"
            size="small"
            multiline
            fullWidth
            onChange={e => setReview(e.target.value)}
            value={review}
          />
        </Grid>
        <Grid item xs={12} />
      </Grid>
    </Dialog>
  );
};

MessageModal.propTypes = {
  messageOpen: PropTypes.bool.isRequired,
  ratingValue: PropTypes.number.isRequired,
  setRatingValue: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired,
  submitLoader: PropTypes.func.isRequired,
  toggleSuggestionDialog: PropTypes.func.isRequired
};
MessageModal.defaultProp = {};

export default MessageModal;
