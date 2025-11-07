import '../css/sideBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function SideBar({ taskInfo }) {

    const [color, setColor] = useState(null);





return (

    <div className='sidebar-container'>
        {
            taskInfo.map((info) => (
                <Link to={info.url} key={info.id}>
                    <div className={color == info.id ?   "activeContainer" : "container"   }  onClick={() => setColor(info.id)}>
                        {info.logo}
                        {info.title}
                    </div>
                </Link>
            ))
        }
    </div>

)
}

export default SideBar;