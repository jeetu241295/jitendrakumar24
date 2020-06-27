import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '__SHARED__/Dialog';
import Button from '__SHARED__/Button';

const styles = makeStyles(() => ({
  listItem: {
    padding: 0
  },
  cancel: {
    marginRight: '1rem'
  }
}));

const MessageModal = props => {
  const {
    ratingValue,
    messageOpen,
    submitMessage,
    submitLoader,
    toggleSuggestionDialog
  } = props;
  const [review, setReview] = useState(null);
  const [name, setName] = useState(null);
  const onClose = () => toggleSuggestionDialog(false);
  const classes = styles();

  return (
    <Dialog
      disableBackdropClick
      title="Feedback"
      open={messageOpen}
      onClose={onClose}
      buttons={[
        <Button
          key={2}
          className={classes.cancel}
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
            <ListItem disableGutters className={classes.listItem}>
              <ListItemText primary="1. Fields are not Mandatory." />
            </ListItem>
            <ListItem disableGutters className={classes.listItem}>
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
  submitMessage: PropTypes.func.isRequired,
  submitLoader: PropTypes.func.isRequired,
  toggleSuggestionDialog: PropTypes.func.isRequired
};
MessageModal.defaultProp = {};

export default MessageModal;
