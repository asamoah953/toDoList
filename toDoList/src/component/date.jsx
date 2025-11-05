import '../css/appBar.css';
import { useState } from 'react';





function DateObject() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    let date = new Date().toString().slice(0, 16);

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 100);




    return (
        <div className='dateContainer'>

            <div className='date'>{date}</div>
            <div className='time'>{time}</div>

        </div>
    )
}

export default DateObject;