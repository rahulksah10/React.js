import { useState } from 'react'

import './App.css'
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'

function App() {
    const[isLogIn, setIsLogIn] = useState(true)
    
    //{-- Logical operator --}
    return(
      <>
      <div>
        <h1>Welocme here to learn  conditional rendrening</h1>
       <div> 
        {isLogIn && <Logoutbtn />}
        </div>
      </div>
      </>
    )

    //{-- Ternary operataor --}
    // return (
    //   <div> {isLogIn? <Logoutbtn />: <Loginbtn/>}</div>
    // )
    
    //{--If else -- }
//     if(isLogIn){
//       return <Logoutbtn />
//     }
//     else{
//       return <Loginbtn/>
//     }
 }

export default App
