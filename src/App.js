import React from "react";
import "./style.css";
import "./components/themes/Theme.constant"
import { ThemeProvider } from './components/themes/ThemeContext';
import ThemeToggler from './components/themes/ThemeToggler';
import Header from './components/Header';

export default function App() {
  return (
    // <ThemeProvider>
      <div>
        <h1>React Theme Example</h1>
        {/* <ThemeToggler /> */}
        <Header/>
      </div>
    // </ThemeProvider>
  );
}
