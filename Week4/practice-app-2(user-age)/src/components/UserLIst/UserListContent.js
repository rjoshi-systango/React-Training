import React from "react";
import './UserListContent.css'; 

const UserListContent = (props) => {
    return (
        <div>
            <p className="list-content">{props.information.name } ( {props.information.age} years old )</p>
        </div>
    );
}

export default UserListContent;