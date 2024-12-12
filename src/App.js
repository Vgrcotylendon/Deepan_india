import React from 'react';
import { SlideShowBar } from './LandingScreen/SlideShowBar';
import Home from './LandingScreen/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "Nunitosans, sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}
