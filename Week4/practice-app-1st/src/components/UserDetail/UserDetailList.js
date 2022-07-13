import React from 'react';
import UserDetail from './UserDetail';
import './UserDetailList.css';

const UserDetailList = (props) => {
    return (
        <div className='list'>
            {props.information.map((information) => {
                return <UserDetail key={information.id}  information={information}/>
            })}


        </div>
    );

}

export default UserDetailList;