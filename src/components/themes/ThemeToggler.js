import React, { useState, useEffect, useContext } from 'react';
//import {lightTheme, darkTheme} from './Theme.constant.js'
import { ThemeContext } from './ThemeContext.js';

const ThemeToggler = () => {

  const {currentTheme, toggleTheme} = useContext(ThemeContext);
    
  return <div>
  <button onClick={toggleTheme}>Toggle Theme</button>
  <p>Current Theme: {currentTheme}</p>
</div>;
};

export default ThemeToggler;
