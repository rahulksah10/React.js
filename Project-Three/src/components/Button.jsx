import React from 'react'

const Button = (props) => {
  return (
    <div className='px-8 py-12 bg-amber-100 rounded-2xl flex gap-6 items-center '> 
        {props.children}
        <button className='bg-gray-600 text-black cursor-pointer px-4 py-2 rounded' onClick={props.handleClick}>
            {props.text}
        </button>
     
    </div>
  )
}
export default Button
