import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';

function App() {
  const authCxt = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCxt.isLoggedIn && (
        <Route path='/auth'>
          <AuthPage />
        </Route>

        )}
        <Route path='/profile'>
          {authCxt.isLoggedIn && <UserProfile />}
          {!authCxt.isLoggedIn && <Redirect to='/auth' />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
