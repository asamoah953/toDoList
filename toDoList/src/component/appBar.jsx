import '../css/appBar.css';
import DateObject from '../component/date.jsx';
import { RxAvatar } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";


function AppBar({ setDropDown }) {
    return (
        <header className="appBar">
            <div className="appBarContainer">
                <h2 className='header'>FocusFlow</h2>

                <DateObject />

                <div className='avatarContainer'>
                    <RxAvatar className='avatar'/>
                    <MdKeyboardArrowDown className='down-arrow'onClick={()=>setDropDown(prev => !prev)}/>
                </div>


            </div>

        </header>
    )
}

export default AppBar;