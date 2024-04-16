import React, { useState, useEffect } from 'react';
import {lightTheme, darkTheme} from './Theme.constant.js'

const ThemeToggler = () => {
  const [currentTheme, setTheme] = useState('light');  
  useEffect(() => {
    const theme = currentTheme === 'light' ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key)=>{
      const value = theme[key]
      document.documentElement.style.setProperty(key, value)
    });
  }, [currentTheme]);

  function onToggle() {
    setTheme(currentTheme == 'light' ? 'dark' : 'light');
  }
  return <button onClick={onToggle}>toggle theme</button>;
};
