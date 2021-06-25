import 'services/firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'hooks/theme';
import GlobalStyles from 'styles/GlobalStyles';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
