import React from 'react'

const ChangeColor = () => {
  return (
    <button onClick={e=>{
        e.stopPropagation();
        onChangeColor();
    }}></button>
  )
}

export default ChangeColor
