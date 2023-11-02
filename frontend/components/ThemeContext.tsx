import React, { useState, useContext } from "react";
import { ReactNode } from "react";
import { createContext } from "react";

export const ThemeContext = React.createContext<boolean>(false);
export const ThemeUpdateContext = React.createContext<() => void>(() => {});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    console.log(`Current theme is: ${darkTheme ? "Dark" : "Light"}`)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
