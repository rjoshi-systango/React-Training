import React from 'react';
import './UserDetail.css';

const UserDetail = (props) => {
    return (
        <div>
            <div className="list-content" >
                <p>{`${props.information.name} (${props.information.age} years old)`}</p>
            </div>
        </div>
    );
}

export default UserDetail;