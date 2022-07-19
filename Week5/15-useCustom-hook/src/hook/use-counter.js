import { useState, useEffect } from 'react';

const useCounter = (positive) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(positive){
            setCounter((prevCounter) => prevCounter + 1);
        }  
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [positive]);

    return counter;
}

export default useCounter;