import React, { createContext, useCallback, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./../themes";


interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: React.ReactNode
}


const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
  }, [])
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}