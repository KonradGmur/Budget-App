import React from 'react';
import './App.css';
import { Navigation } from 'components';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
