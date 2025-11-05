import '../css/sideBar.css';
import { Link } from 'react-router-dom'


function SideBar({ taskInfo }) {
    return (

        <div className='sidebar-container'>
            {
                taskInfo.map((info) => (
                    <Link to={info.url}>
                        <div className="container" key={info.title}>
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