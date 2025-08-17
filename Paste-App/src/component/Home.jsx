import React, { useState } from 'react'

const Home = () => {
    const [title, setTitle] = useState('');
  return (
    <div>
     <input 
       type="text" 
       placeholder='enter title here'
       value={title}
       onChange={(e)=> setTitle(e.target.value)}
       className='border rounded' />
    </div>
  )
}

export default Home
