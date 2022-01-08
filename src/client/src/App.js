import { useMemo, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import auth from './api/auth';
import AppContainer from './components/AppContainer';
import PublicRoute from './components/routing/PublicRoute';
import { AuthContext } from './context';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import PDFView from './pages/ExportPDFPage';

const queryCache = new QueryCache();

function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    query: searchParams.get('query') || '',
  };
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => auth.isAuthenticated
  );

  const authContextValue = useMemo(
    () => ({
      isAuthenticated,
      login: async (email, password) => {
        // This function call throws in the case of invalid credentials
        await auth.login(email, password);
        setIsAuthenticated(true);
        queryCache.clear();
      },
      logout: () => {
        auth.logout();
        setIsAuthenticated(false);
        queryCache.clear();
      },
    }),
    [isAuthenticated]
  );

  const MainPage = (props) => {
    let query = '';
    return <h2>{`Query : ${query}`}</h2>;
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <Router>
        <AppContainer>
          <main>
            <Switch>
              <PublicRoute exact path="/" component={IndexPage} />
              <PublicRoute exact path="/pdf" component={PDFView} />
              <Route exact={false} component={NotFoundPage} />
            </Switch>
          </main>
        </AppContainer>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
