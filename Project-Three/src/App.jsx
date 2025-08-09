import react from 'react'
import React, { useState } from "react";
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Card2 from './components/Card2';


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //Create State(name)
  //manage state(name)
  //change state(name)
  //Sabhi child me state kp sync karwadunga(name)


  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className=' flex   justify-center
      mt-12 bg-amber-600 '>

      <Button handleClick={handleClick} text="click me">
        <h1 className='text-4xl font-bold'>{count}</h1>
      </Button>

     <Card2 title="card2.1" name={name} setName={setName}  />
     <Card2 title="card2.2" name={name} setName={setName}  />
     {/* <p>I am inside Parent componenet and value of name is {name} </p> */}
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
