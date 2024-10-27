import { useState, useCallback } from 'react';
import { Colors } from 'react-native-ui-lib';

export function useDarkMode() {
  const [theme, setTheme] = useState(Colors.getScheme()); // Get initial theme
  const [mainBackgroudColor, setBackgroudColor] = useState(Colors.mainBackground);
  const invertedTheme = theme === 'light' ? 'dark' : 'light';

  const toggleDarkMode = useCallback(() => {
    Colors.setScheme(invertedTheme);
    setTheme(invertedTheme); // Update state to re-render components with new theme

    // permet de regler le bug qui fait que le background ne se met pas à jour
    setBackgroudColor(Colors.mainBackground)
  }, [theme]);

  return { theme, invertedTheme, toggleDarkMode };
}


export function useThemeSelectorMode() {
    const [theme, setTheme] = useState(Colors.getScheme()); // Get initial theme
    const [mainBackgroudColor, setBackgroudColor] = useState(Colors.mainBackground);
  
    const toggleTheme = useCallback((name) => {
      Colors.setScheme(name);
      setTheme(name); // Update state to re-render components with new theme
  
      // permet de regler le bug qui fait que le background ne se met pas à jour
      setBackgroudColor(Colors.mainBackground)
    }, [theme]);
  
    return { theme, toggleTheme };
}