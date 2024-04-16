import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =>{
    const [theme, setTheme] = useState('light');

    const toggleTheme=()=> {
        setTheme(currentTheme == 'light' ? 'dark' : 'light');
    }
    // Provide the current theme and toggle function to children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}