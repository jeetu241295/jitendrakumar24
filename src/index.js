import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import reducer from './Widget/reducers';
import PersonalWebsite from './Widget/components/App';
import theme from './Global/theme';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <PersonalWebsite />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
