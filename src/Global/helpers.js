import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import SnackBar from '../Components/SnackBar';
import themeCSS from './theme';

function renderSnackbar(message) {
  ReactDOM.render(
    <MuiThemeProvider theme={themeCSS}>
      <SnackBar message={message} open />
    </MuiThemeProvider>,
    document.getElementById('snackbar')
  );
}

export const checkIsMobile = () => {
  let isMobile = false;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    isMobile = true;
  }
  return isMobile;
};

export default renderSnackbar;
