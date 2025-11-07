import '../css/todoList.css';
import { GiGraduateCap } from "react-icons/gi";



function SchoolToDoListTitle() {
    return(
        <div className="titleContainer">

            <GiGraduateCap className='graduate'/>

            <h2 className='title'>School To-Do List</h2>

        </div>
    )
}

export default SchoolToDoListTitle;