import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '__SHARED__/Dialog';
import Button from '__SHARED__/Button';
import { useSelector } from 'react-redux';
import {
  submitMessage,
  toggleSuggestionDialog,
  setRatingValue
} from '../../personalWebsiteSlice';

const styles = {
  listItem: {
    padding: 0
  },
  cancel: {
    marginRight: '1rem'
  }
};

const MessageModal = () => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const ratingValue = useSelector(state => state.personalWebsite.ratingValue);
  const messageOpen = useSelector(state => state.personalWebsite.messageOpen);

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

MessageModal.propTypes = {};
MessageModal.defaultProp = {};

export default MessageModal;
