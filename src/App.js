import React from 'react';
import GlobalStyles from './index.css';
import { Navigation, Wrapper, LoadingIndicator, Button } from 'components';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' },
        ]}
          RightElement={(
            <div>
              <Button variant="regular" onClick={() => i18n.changeLanguage('en')}>ENG</Button>
              <Button variant="regular" onClick={() => i18n.changeLanguage('pl')}>PL</Button>
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
    </>
  );
}

const ConnectedApp = connect(state => {

})(App)

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
