import React from 'react'
import Toggle from './Toggle'



const Navbar = (props) => {
  return (
    <div>
      <nav className='flex sm:text-sm  sm:flex-row gap-2 bg-gray-200 items-center p-4 justify-between '>
        <div className=' flex  ' >
          <ul className=' gap-8   items-center cursor-pointer '>
            <div className='flex items-center gap-3 md:hidden'>
              <li><img src="/assets/menu.svg" alt="" /></li>
              <li><img src="/assets/metalogo.svg" alt="Meta" /></li>
            </div>
            <div className=' gap-8   items-center cursor-pointer md:flex hidden '>
            <li><img src="/assets/metalogo.svg" alt="Meta" /></li>
            <li className='hover:bg-gray-300 p-2 rounded-full'>AI glasses</li>
            <li className='hover:bg-gray-300 p-2 rounded-full'>Meta Quest</li>
            <li className='hover:bg-gray-300 p-2 rounded-full '>Apps and games</li>
            
            </div>
          </ul>
        </div>
        <div>
          <ul className=' flex gap-8   items-center cursor-pointer  '>
             <li className=' md:hidden'><img src="/assets/user-round.svg" alt="profile" /></li>
            <li className='hover:bg-gray-300 p-2 rounded-full lg:flex hidden'>Explore meta</li>
            <li className='hover:bg-gray-300 p-2 rounded-full md:flex hidden'>Support</li>
            <li className='md:flex hidden' ><img src="/assets/handbag.svg" alt="cart" /></li>
            <li className='md:flex hidden'><img src="/assets/user-round.svg" alt="profile" /></li>
           <Toggle/>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
