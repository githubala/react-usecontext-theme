import React, { useState, useEffect, useContext } from 'react';
import {lightTheme, darkTheme} from './Theme.constant.js'
import { ThemeContext } from './ThemeContext.js';

const ThemeToggler = () => {
  const [currentTheme, setTheme] = useState('light');  
  useEffect(() => {
    const themes = currentTheme === 'light' ? lightTheme : darkTheme;
    Object.keys(themes).forEach((key)=>{
      const value = themes[key]
      document.documentElement.style.setProperty(key, value)
    });
  }, [currentTheme]);

  const {theme, toggleTheme} = useContext(ThemeContext);

  
  return <div>
  <button onClick={toggleTheme}>Toggle Theme</button>
  <p>Current Theme: {theme}</p>
</div>;
};

export default ThemeToggler;
