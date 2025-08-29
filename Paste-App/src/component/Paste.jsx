import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../Redux/PasteSlice';
import toast from 'react-hot-toast';
import { Link } from "react-router";

const Paste = () => {

  const pastes = useSelector((state) =>
    state.paste.pastes);

  const [serchTerm, setsearchterm] = useState('')

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(serchTerm.toLowerCase())
  );


  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }


  return (
    <div className='ml-4 p-3'>
      <input
        className='border rounded-2xl min-w-[600px] mt-4 ml-4 p-2'
        type="search"
        placeholder='search here'
        value={serchTerm}
        onChange={(e) => setsearchterm(e.target.value)}
      />

      <div className='flex flex-col gap-3 ml-4'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div key={paste?._id} className='border mt-5 p-2'>
                  <div >
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className=' flex  flex-row place-content-evenly '>
                    <button
                      className='border px-3 py-2 rounded-full cursor-pointer '>
                      <Link to={`/?pasteId=${paste?._id}`}> Edit</Link>
                    </button>
                    <button 
                    className='border px-3 rounded-full py-2 cursor-pointer '>
                      <Link to={`/pastes/${paste?._id}`}>View</Link>
                      </button>
                    <button
                      onClick={() => handleDelete(paste?._id)}
                      className='border px-3 rounded-full py-2 cursor-pointer '>Delete</button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content)
                        toast.success("Copied to clipboard")
                      }}

                      className='border px-3 rounded-full py-2 cursor-pointer '>Copy</button>
                    <button className='border px-3 rounded-full py-2 cursor-pointer' >share</button>
                  </div>

                  <div>
                    {paste.createdAt}
                  </div>
                </div>

              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Paste
