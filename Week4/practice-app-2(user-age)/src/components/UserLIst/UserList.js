import React from "react";
import Card from '../UI/Card';
import UserListContent from './UserListContent';

const UserList = (props) => {
    // console.log(props.usersInformation);
    return (
        <Card>
            {props.usersInformation.map((userInformation) => {
                return <UserListContent information={userInformation} key={userInformation.id}/>
            })}
            
        </Card>
    );
}

export default UserList;