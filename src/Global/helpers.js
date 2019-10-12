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

export default renderSnackbar;
