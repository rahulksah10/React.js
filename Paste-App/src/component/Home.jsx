import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setvalue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId")
  return (
    <div>
     <input 
       type="text" 
       placeholder='enter title here'
       value={title}
       onChange={(e)=> setTitle(e.target.value)}
       className='border rounded' />

      <button className='border'>Create my Paste</button>
    </div>
  )
}

export default Home
