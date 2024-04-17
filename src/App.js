import React from "react";
import "./style.css";
import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>React Theme Example</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
}
