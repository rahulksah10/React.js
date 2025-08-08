import react, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter-Container'>
            <p id='para'>You have clicked {count} times</p>
            <button id='btn' onClick={() => { setCount(count + 5) }}>Click me</button>
        </div>
    )
}

export default Counter
