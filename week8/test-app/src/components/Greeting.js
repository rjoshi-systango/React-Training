import { useState } from 'react';

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }
  return (
    <div>
        <h2>Hello World!</h2>
        {!changedText && <p>It's good to see you!</p>}
        {changedText && <p>Changed!</p>}
        
        <button onClick={changeTextHandler} >Changed Text</button>
    </div>
  );
};

export default Greetings;