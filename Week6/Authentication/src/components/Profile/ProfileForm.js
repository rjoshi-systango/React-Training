import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const enteredPassword = useRef();
  const authCxt = useContext(AuthContext);
  const history = useHistory();

  const submitFormHandler = (event) => {
    event.preventDefault();


    let userPassword = enteredPassword.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDWdGFUcqFUwhHeLaAmI7Xm20_jgLqBmPA', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCxt.token,
        password: userPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type':'applicaitons/json'
      }
    })
    .then((response) => {
      if(response.ok){
        alert("Change Password Successfully");
        history.push('/');
      }else {
        return response.json().then((data) => {
          console.log(data.error.message);
          throw new Error(data.error.message);
        })
      }
    })

    .catch((error) => {
      console.log(error);
    })

  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={enteredPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
