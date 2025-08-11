import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <div onClick={()=>setToggle(!toggle)} className= {` border outline-none h-7 w-14 rounded-full relative ${toggle?"bg-red-500":"bg-green-600"}`}>
    
      <div className={`bg-white  h-4 w-6 rounded-full absolute top-1 ${toggle? "right-1 transition-all duration-3000":"left-1"} `} > </div>
    </div>
  )
}

export default Toggle
