import React from 'react';
import { useEffect, useState } from 'react';

const Timercomp = () => {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log("SetInterval executed")
            setSecond(prevSeconds => prevSeconds + 1)
        }, 1000)
        return () => {
            console.log("Time is unmounted")
            clearInterval(intervalid);
        };
    }, []);
    // dependencias will run only on first render
    return (
        <div>
            <h1 className='text-4xl font-bold '>Seconnds: {second}</h1>
        </div>
    );
}

export default Timercomp;
