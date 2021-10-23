import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CssBaseline/>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
