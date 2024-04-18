import React, { createContext, useState, useEffect } from "react";
import {lightTheme, darkTheme} from './Theme.constant';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =>{
    const [currentTheme, setTheme] = useState('light');

    useEffect(() => {
        const themes = currentTheme === 'light' ? lightTheme : darkTheme;
        Object.keys(themes).forEach((key)=>{
          const value = themes[key]
          document.documentElement.style.setProperty(key, value)
        });
      }, [currentTheme]);

    const toggleTheme=()=> {
        setTheme(currentTheme == 'light' ? 'dark' : 'light');
    }
    // Provide the current theme and toggle function to children components
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}