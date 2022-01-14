import React, { useState,useCallback,useEffect } from 'react';

import './App.css';


function beCalled(){
  console.log('run');
}


function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0)


  useEffect(() => {
    
   (function effectCalled(){
      console.log(count)
   })()
  }, [count])

  return <div onClick={function addCount(){
    setCount(v=>v+1)
    setCount1(v=>v+1)
    beCalled()
  }}>
     <h1>  {count} </h1>
      <h2> {count1} </h2>
  </div>

}

export default App;
