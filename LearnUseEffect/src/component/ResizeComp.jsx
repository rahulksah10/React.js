import React from 'react';
import { useEffect, useState } from 'react';

const ResizeComp = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizze = () => setWindowWidth(window.innerWidth)
        console.log("Event Listener Added");
        window.addEventListener('resize', handleResizze);

        return () => { 
            console.log("Event Listener removed");
            window.removeEventListener('resize', handleResizze);
            
        };
    }, []);

    // it will run only on ......

    return (
        <div>
            <h1 className=' flex text-4xl font-bold'>window width : {windowWidth}px</h1>
        </div>
    );
}

export default ResizeComp;

