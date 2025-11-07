import '../css/todoList.css';
import { IoPersonAdd } from "react-icons/io5";



function PersonalDoListTitle() {
    return(
        <div className="titleContainer">

            <IoPersonAdd className='graduate'/>

            <h2 className='title'>Personal To-Do List</h2>

        </div>
    )
}

export default PersonalDoListTitle;