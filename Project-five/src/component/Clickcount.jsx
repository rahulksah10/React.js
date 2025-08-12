import { useState } from 'react'
import ChangeColor from './ChangeColor';

const Clickcount = () => {

    const [clicks, setClicks] = useState();
    function handleonclick() {
        setClicks(c => c + 1);
    }

    function getRandomColor() {
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;
    }
    function handleChangeColor() {
        let bodyStyle = document.body.style;
        bodyStyle.backgroundColor = getRandomColor();
    }
    return (
        <div className='border' style={{ width: '100%', height: '50vh' }} onClick={handleonclick}>
            <ChangeColor onChangeColor={handleChangeColor} />
        </div>
    )
}

export default Clickcount
