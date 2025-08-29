import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from '../Redux/PasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setvalue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch();
  const allPaste = useSelector((state) => state.paste.pastes);



  useEffect(() => {
      console.log("inside use effect")
      if (pasteId) {
        const paste = allPaste.find((p) =>
          p._id === pasteId);
        console.log("page found")
        setTitle(paste.title)
        setvalue(paste.content);
      }

    }, [pasteId]);


  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      // update karna chahta hn
      dispatch(updateToPastes(paste))
    }
    else {
      // to nya create karna chahta hn  
      dispatch(addToPastes(paste))
    }


    // creation aur updation ke bad clear karna h 
    setTitle('');
    setvalue('');
    setSearchParams({});

  }

  return (
    <div className='pl-8'>
      <div>
        <input
          type="text"
          placeholder='enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border rounded' />

        <button
          onClick={createPaste}
          className='border'>
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }
        </button>
      </div>
      <div>
        <textarea name="" id=""
          className='border'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          placeholder='enter content here'
          rows={25} cols={40}

        ></textarea>
      </div>
    </div>
  )
}

export default Home
