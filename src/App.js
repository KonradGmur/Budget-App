import React from 'react';
import GlobalStyles from './index.css';
import { Navigation, Wrapper } from 'components';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' },
        ]}
          RightElement={(
            <div>
              <button>PL</button>
              <button>ENG</button>
            </div>
          )}
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">Homepage</Route>
            <Route path="/budget">Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
