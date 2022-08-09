import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext  from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCxt = useContext(AuthContext);
  const userIsLoggedIn = authCxt.isLoggedIn;

  const logoutClickHandler = () => {
    authCxt.logout();
  } 
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!userIsLoggedIn && 
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {userIsLoggedIn &&
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }

          {userIsLoggedIn &&
            <li>
              <button onClick={logoutClickHandler}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
