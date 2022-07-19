import React from 'react';
import useCounter from '../hook/use-counter';

import Card from './Card';

const ForwardCounter = () => {

  let counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
