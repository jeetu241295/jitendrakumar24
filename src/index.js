import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PersonalWebsite from './Widgets/App';
import theme from './Global/theme';

const ele = document.getElementById('root');

const root = ReactDOM.createRoot(ele);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <PersonalWebsite />
  </ThemeProvider>
);
