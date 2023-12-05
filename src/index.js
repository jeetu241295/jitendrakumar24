import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import PersonalWebsite from './Widget/components/App';
import theme from './Global/theme';

const store = configureStore({
  reducer: rootReducer
});

const ele = document.getElementById('root');
const root = ReactDOM.createRoot(ele);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersonalWebsite />
    </ThemeProvider>
  </Provider>
);
