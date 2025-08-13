import { createContext, useState } from 'react'
import './App.css'
import './index.css'
import ChildA from './component/ChildA'

             //we can add usecontext more than one

// step 1 : create Context
// const UserContext = createContext();
// step 2 : wrap all the child inside a provider
// step 3 : pass value
// step 4 : consume k ander jaake consume karlo

// step 1 : create theme context

const ThemeContext = createContext();

function App() {

  // const [user, setUser] = useState({name:"love"});

  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
       
         <div style={{backgroundColor:theme==='light'?"white":"black"}} className=' border  w-60 h-60 rounded-xl flex flex-col   justify-center items-center'>
           <ChildA />
         </div>

      </ThemeContext.Provider>
      {/* <UserContext.Provider value={user}>
      <ChildA/>
      </UserContext.Provider> */}
    </>
  )
}

export default App

export {ThemeContext}
