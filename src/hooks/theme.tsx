import { createContext, ReactNode, useContext, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';

import dark from 'styles/themes/dark';
import light from 'styles/themes/light';
import usePersistedState from 'utils/usePersistedState';

type ThemeProviderProps = {
  children: ReactNode;
};

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@LetmeaskTheme',
    dark,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? light : dark);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
