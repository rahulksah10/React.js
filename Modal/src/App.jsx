import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalPopup from './component/ModalPopup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModalPopup />
    </>
  )
}

export default App
