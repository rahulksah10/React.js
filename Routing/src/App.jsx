
import './App.css'
import {  Route, Routes } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import Contactus from './components/Contactus'




function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </div>
  )
}

export default App
