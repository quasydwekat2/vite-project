import { useEffect, useState } from 'react';

export default function useThemeMode(defaultMode = true) {
  const [darkMode, setDarkMode] = useState(defaultMode);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleTheme };
}
