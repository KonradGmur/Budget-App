import React from 'react';
import GlobalStyles from './index.css';
import { Navigation, Wrapper } from 'components';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();

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
              <button onClick={() => i18n.changeLanguage('en')}>ENG</button>
              <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
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

function RootApp() {
  return (
    <React.Suspense fallback='Loading...'>
      <App />
    </React.Suspense>
  )
}

export default RootApp;
