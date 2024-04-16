import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const [currentTheme, setTheme] = useState('light');
  useEffect(() => {
    Object.keys(theme).forEach({
      
    });
  }, [currentTheme]);

  function onToggle() {
    setTheme(currentTheme == 'light' ? 'dark' : 'light');
  }
  return <button onClick={onToggle}>toggle theme</button>;
};
