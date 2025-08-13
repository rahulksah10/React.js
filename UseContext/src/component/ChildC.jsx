import React, { useContext } from 'react';

import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    function handleClick (){
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
         
    }
    return (
        <div>
           <button onClick={handleClick} className='border px-3 py-1 text-xl text-red-400 font-bold rounded-md cursor-pointer'>
            {theme}
           </button>
        </div>
    );
}

export default ChildC;
