import React, { useState } from 'react';
import UserForm from './components/UserForm/UserFrom';
import UserList from './components/UserLIst/UserList';
import './App.css';



function App() {

  const [usersInformation, setUsersInformation] = useState([]);

  const setNewUser = (userData) => {
    // console.log(userData);
    setUsersInformation((preValue) => {
      return [userData, ...preValue]
    })
  }

  return (
    <div className="main">
      <UserForm onSubmitNewUser={setNewUser} />
      <UserList usersInformation={usersInformation} />
    </div>
  );
}

export default App;
