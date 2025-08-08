import React from 'react'

function UserCard(props) {
  return (
    <div className='user-container  bg-amber-300 m-4  p-4 flex flex-col  items-center rounded-lg  gap-4'>
     <p id='user-name'>{props.name}</p>
     <img id='user-img' src={props.image} alt={props.name} className=' h-60 w-60 rounded-full'
      />
     <p id='user-description'>{props.desc}</p>
    </div>
  )
}

export default UserCard
