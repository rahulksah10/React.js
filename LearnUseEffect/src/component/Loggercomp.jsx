import React from 'react';
import { useEffect, useState } from 'react';

const Loggercomp = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("It will run in every render",count)
    });
    return (
        <div>
            <h1 className='text-4xl font-bold ' >Count : {count}</h1>
            <button className='cursor-pointer border mt-2 px-2 py-2 rounded-full' onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Loggercomp;
