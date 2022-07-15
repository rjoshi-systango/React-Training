

import React, { useMemo } from 'react';

import classes from './SortedList.module.css';

const SortedList = (props) => {
//   const { items } = props;

//   const sortedList = useMemo(() => {
//     console.log('Items sorted');
//     return items.sort((a, b) => a - b);
//   }, [items]); 
  console.log('SortedList RUNNING');
    const sortedList = props.items.sort((a, b) => a - b);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SortedList);