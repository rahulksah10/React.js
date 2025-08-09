import React from 'react'

const Card2 = (props) => {
  return (
    <div className=' flex flex-col gap-3 m-3' >
      <input className='border ' type="text"  onChange={(e)=> props.setName(e.target.value)} />
      <p>Name state variable ki value , inside {props.title}: {props.name}</p>
    </div>
  )
}

export default Card2
