import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className=' p-4  m-0 bg-red-400' >
        <ul className=' flex font-medium space-x-2.5 cursor-pointer '>
          <li onClick={()=> navigate('/')}>Home</li>
          <li onClick={()=> navigate('/about')}>About</li>
          <li onClick={()=> navigate('/dashboard')}>Dashboard</li>
          <li onClick={()=> navigate('/contactus')}>Contactus</li>
        
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
