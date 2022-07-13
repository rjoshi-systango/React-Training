import React, { useState } from 'react';
import UserDetailList from './UserDetail/UserDetailList';
import UserForm from './UserForm/UserForm';
import './Main.css';

const INITIAL_INFORMATION = [
    {id: '1', name: 'Ritik', age: 22},
    {id: '2', name: 'Chetan', age: 21},
    {id: '3', name: 'Praveen', age: 23},
    {id: '4', name: 'Shubham', age: 22},
]


const Main = () => {

    const [newData, setNewData] = useState(INITIAL_INFORMATION);

    const saveUserInformation = (userData) => {
        setNewData((preValue) => {
            return [userData, ...preValue];
        });
    }

    return (
        <div className='main' >
            <UserForm onSaveUserInformation={saveUserInformation} />
            <UserDetailList information={newData}/>
        </div>
    );
}

export default Main;