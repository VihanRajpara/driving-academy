import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { SnackbarProvider } from './util/SnackbarProvider';
import { UserProvider } from "./modules/context/UserProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </BrowserRouter>
);