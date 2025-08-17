import './App.css'
import {  Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Paste from './component/Paste';
import ViewPaste from './component/ViewPaste';

function App() {

  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route  path='/pastes' element={<Paste/>} />
      <Route  path='/pastes/:id' element={<ViewPaste/>} />
    </Routes>
   </div>
  )
}

export default App
