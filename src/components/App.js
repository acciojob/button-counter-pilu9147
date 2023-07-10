
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [c,uc] = useState(0)
  let incre = ()=>{
    uc(c+1)
  }
  return (
    <div>
      <p>Button clicked {c} times</p>
      <button onClick={incre}/>
    </div>
  )
}

export default App
