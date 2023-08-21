/* eslint-disable no-console */
import { reset } from 'redux-form';
import { createAction } from '__GLOBAL__/redux';
import renderSnackbar from '__GLOBAL__/helpers';
import axiosAPI from '__GLOBAL__/axios';
import {
  SUBMIT_LOADER,
  SUGGESTION_DIALOG,
  RATING,
  RATING_VALUE
} from '../_helpers/constants';

export const toggleSuggestionDialog = createAction(SUGGESTION_DIALOG, 'value');
export const toggleRating = createAction(RATING, 'value');
export const setRatingValue = createAction(RATING_VALUE, 'value');
export const submitLoader = createAction(SUBMIT_LOADER);

export const sendMail = values => dispatch => {
  axiosAPI
    .post('/sendMessage', {
      ...values
    })
    .then(res => {
      dispatch(submitLoader());
      dispatch(reset('contactForm'));
      renderSnackbar(res);
    })
    .catch(error => {
      console.log(error);
    });
};

export const downloadCV = () => () => {
  axiosAPI
    .get('/downloadCV')
    .then(res => {
      if (res.data.status !== 1) {
        renderSnackbar({ data: { message: 'File downloading...!' } });
        const dataURI = `data:application/pdf;base64,${res.data.filedata}`;
        const link = document.createElement('a');
        document.body.appendChild(link);
        if (navigator.appVersion.toString().includes('.NET')) {
          const binary = atob(res.data.filedata.replace(/\s/g, ''));
          const len = binary.length;
          const buffer = new ArrayBuffer(len);
          const view = new Uint8Array(buffer);
          for (let i = 0; i < len; i += 1) {
            view[i] = binary.charCodeAt(i);
          }
          const fileBlob = new Blob([view], {
            type: 'application/pdf'
          });
          window.navigator.msSaveBlob(fileBlob, res.data.filename);
        } else {
          link.href = dataURI;
          link.download = res.data.filename;
          link.click();
        }
        link.remove();
      } else {
        renderSnackbar({
          data: {
            message:
              'Something went wrong..!! please try again after some time.'
          }
        });
      }
    })
    .catch(error => console.log(error));
};

export const submitMessage = (ratingValue, name, review) => dispatch => {
  axiosAPI
    .post('/submitReview', {
      ratingValue,
      name,
      review
    })
    .then(res => {
      dispatch(submitLoader());
      renderSnackbar(res);
      if (res.data.status === 1) dispatch(toggleRating(false));
    })
    .catch(error => console.log(error));
};
