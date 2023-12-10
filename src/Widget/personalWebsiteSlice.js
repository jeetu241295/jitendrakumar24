import { createSlice } from '@reduxjs/toolkit';
import renderSnackbar from '__GLOBAL__/helpers';
import axiosAPI from '__GLOBAL__/axios';

const initialState = {
  ratingValue: 0,
  messageOpen: false,
  showRating: true
};

export const personalWebsiteSlice = createSlice({
  name: 'personalWebsite',
  initialState,
  reducers: {
    toggleSuggestionDialog: (state, action) => {
      state.messageOpen = action.value;
    },
    toggleRating: (state, action) => {
      state.showRating = action.value;
    },
    setRatingValue: (state, action) => {
      state.ratingValue = action.value;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  submitLoader,
  toggleSuggestionDialog,
  toggleRating,
  setRatingValue
} = personalWebsiteSlice.actions;

export const sendMail = values => dispatch => {
  axiosAPI
    .post('/sendMessage', {
      ...values
    })
    .then(res => {
      dispatch(submitLoader());
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
        if (navigator.userAgent.toString().includes('.NET')) {
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

export default personalWebsiteSlice.reducer;
