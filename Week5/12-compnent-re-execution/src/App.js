import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
import SortedList from './components/SortedList/SortedList';

function App() {
  
  console.log('APP RUNNING');
  
  // const [showParagraph, setShowParagraph] = useState(false);
  // console.log(showParagraph);
  
  // const toggleParagraphHandler = useCallback(() => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // }, []);

  const [listTitle, setListTitle] = useState('My List');

  
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);



  return (
    <div className="app">
      <h1>Hi there!</h1>
      <SortedList  title={listTitle} items={[5,2,3,1,4]}/>
      
      <DemoOutput show={false} />
      <Button onClick={changeTitleHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;