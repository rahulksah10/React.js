import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQAccordion from './components/FAQAccordion'
import FormWithValidation from './components/FormWithValidation'
import Stopwatch from './components/Stopwatch'

function App() {
  

  return (
    <>
    <FAQAccordion />
    <FormWithValidation />
    <Stopwatch />
    </>
  )
}

export default App
