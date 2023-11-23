import { useState } from 'react'
import './App.css'

function App() {
  const[counterValue,setCounterValue] = useState(0)
  const addValue = ()=>{
  if(counterValue <100)
    setCounterValue(counterValue+1) //BUT UI is not Updated
  }

  const decreaseValue=()=>{
    if(counterValue>0)
     setCounterValue(counterValue-1)
  }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter Value  : {counterValue}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>{counterValue}</p>
    </>
  )
}

export default App
