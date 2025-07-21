import { useEffect, useState } from 'react';

export default function useThemeMode(defaultMode) {
  const getPreferredTheme = () => {
    if (localStorage.getItem('darkMode') !== null) {
      return JSON.parse(localStorage.getItem('darkMode'));
    }
    if (typeof defaultMode === 'boolean') {
      return defaultMode;
    }
    // Detect system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getPreferredTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleTheme };
}
