/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { COUNT, DIALOG } from '../_helpers/constants';
import { createAction } from '../../Global/redux';
import renderSnackbar from '../../Global/helpers';
import axiosAPI from '../../Global/axios';

export const setCount = createAction(COUNT, 'id');
export const dialogOpen = createAction(DIALOG, 'index', 'image');

export const sendMail = (values, reset) => dispatch => {
  axiosAPI
    .post('/sendMessage', {
      ...values
    })
    .then(res => {
      renderSnackbar(res.data.message);
    })
    .catch(error => {
      console.log(error);
    });
};

export const downloadCV = () => () => {
  axiosAPI
    .get('/downloadCV')
    .then(res => {
      renderSnackbar('File downloading...!');
      const dataURI = `data:application/pdf;base64,${res.data.filedata}`;
      const link = document.createElement('a');
      document.body.appendChild(link);
      if (navigator.appVersion.toString().indexOf('.NET') > 0) {
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
    })
    .catch(error => console.log(error));
};
