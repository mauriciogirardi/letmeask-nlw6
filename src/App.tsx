import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';

import { useTheme } from 'hooks/theme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
