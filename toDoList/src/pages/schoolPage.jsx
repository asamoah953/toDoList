import '../css/homePage.css';
import InputTask from '../component/inputTask';
import SchoolToDoListTitle from '../component/schoolToDoList';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import CheckInput from '../component/checkedInput';




function SchoolToDoList({ schoolAssignment }) {

    const [assignment, setAssignment] = useState(schoolAssignment)

    return (
        <div className="home-page">
            <SchoolToDoListTitle />
            <InputTask />


            {assignment && assignment.map((assigned) => (
                <div key={assigned.id} className="assignment">
                    <div className="left">
                        <CheckInput className ="checkBox"/>
                        <span className="task-text">{assigned.task}</span>
                    </div>

                    <MdDelete className="delete-icon" />
                </div>
            ))}



        </div>
    )
}

export default SchoolToDoList;