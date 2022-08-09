import React from 'react';
import UpdatedComponent from './HOC/withCounter';

const OverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <h3 onMouseOver={incrementCount} >Over count {count}</h3>
    )
}


export default UpdatedComponent(OverCounter);