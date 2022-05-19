import React, { useMemo, useState } from 'react';
import { ThemeContext, Theme } from '../context/ThemeContext';
import changeCssRootVariables from '../model/ChangeCssRootVariables';
import storage from '../model/Storage';

function ThemeProvider({ children, ...props }) {
  const [theme, setTheme] = useState(storage.getItem('theme') || Theme.LIGHT);

  changeCssRootVariables(theme);
  function changeTheme(them) {
    storage.setItem('theme', them);
    setTheme(them);
    changeCssRootVariables(them);
  }

  const value = useMemo(() => ({ theme, changeTheme }), [theme]);

  return (
    <ThemeContext.Provider
      {...props}
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
