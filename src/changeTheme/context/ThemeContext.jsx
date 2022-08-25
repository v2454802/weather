import { createContext } from 'react';

const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
};

const ThemeContext = createContext({
  theme: Theme.LIGHT,
  changeTheme: () => { },
});

export { ThemeContext, Theme };
