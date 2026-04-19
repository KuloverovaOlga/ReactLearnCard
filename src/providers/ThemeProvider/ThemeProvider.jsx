import React, { useLayoutEffect, useState } from 'react';
import { THEME_STORAGE } from '../../constants';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE) || 'dark';
  const [theme, setTheme] = useState(savedTheme);

  useLayoutEffect(() => {
    const detectedTheme = () => {
      const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

      if (isLight) {
        setTheme('light');
        document.body.classList.remove('lightMode');
      } else {
        savedTheme === 'light' && document.body.classList.add('lightMode');
        setTheme(savedTheme);
      }
    };
    detectedTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    mediaQuery.addEventListener('change', detectedTheme);

    return () => {
      mediaQuery.removeEventListener('change', detectedTheme);
    };
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
