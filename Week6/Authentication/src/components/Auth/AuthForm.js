import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';




const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const authCxt = useContext(AuthContext);
  const history = useHistory();
  let url;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitFormHandler = (event) => {
    event.preventDefault(); 
    const userEmail = enteredEmail.current.value;
    const userPassword = enteredPassword.current.value;
    setIsLoading(true);
    if (isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWdGFUcqFUwhHeLaAmI7Xm20_jgLqBmPA';
    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWdGFUcqFUwhHeLaAmI7Xm20_jgLqBmPA'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        returnSecureToken: true
      }),
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then((response) => {
      if(response.ok){
        setIsLoading(false);
        return response.json();
      }else{
        return response.json().then((data) => {
          setIsLoading(false);
          throw new Error(data.error.message); 
        })
      }
    })
    .then((data) => {
      authCxt.login(data.idToken, data.expiresIn);
      history.replace('/');
    })
    .catch((err) => {
      alert(err.message);
    })


  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={enteredEmail} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={enteredPassword} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }
          {isLoading && <p>Sending Request...</p>}
          
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
