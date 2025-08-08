import react from 'react'
import React, { useState } from "react";
import './App.css'
import Card from './components/Card'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className=' flex   justify-center
 mt-12 '>
    
        <Button handleClick={handleClick} text="click me">
         <h1 className='text-4xl font-bold'>{count}</h1>
        </Button>
      
      {/* <Card >
        <h1>Learning React</h1>
        <p>React is a framework of the javascript.</p>
        <p>it is helps us to make  intractive and dynamic UI </p>
        <Card children="easy to develope web application">

        </Card>
      </Card> */}
    </div>
  )
}

export default App
