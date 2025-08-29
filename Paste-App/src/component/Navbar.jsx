import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Navbar = () => {
    const  navigate = useNavigate();
  return (
    <div className='place-content-evenly' >
      <nav className='p-4 m-0 bg-red-400 '>
        <ul className=' flex font-medium space-x-2.5 cursor-pointer '>
            <li onClick={()=> navigate('/')}>Home</li>
            <li onClick={()=> navigate('/pastes')}>Paste</li>
            {/* <li onClick={()=> navigate('/pastes/:id')}>View paste</li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
