import '../css/homePage.css';
import SchoolTaskInput from '../component/schoolTaskInput';
import SchoolToDoListTitle from '../component/schoolToDoList';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import CheckInput from '../component/checkedInput';




function SchoolToDoList({ schoolAssignment }) {

    const [assignment, setAssignment] = useState(schoolAssignment)

    return (
        <div className="home-page">
            <SchoolToDoListTitle />
            <SchoolTaskInput assignment = {assignment} setAssignment={setAssignment}/>


            {assignment && assignment.map((assigned) => (
                <div key={assigned.id} className="assignment" >
                    <div className="left">
                        <CheckInput className ="checkBox" key={assigned.id}/>
                        <span className="task-text">{assigned.task}</span>
                    </div>

                    <MdDelete className="delete-icon" key={assigned}/>
                </div>
            ))}



        </div>
    )
}

export default SchoolToDoList;