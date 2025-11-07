import '../css/homePage.css';
import InputTask from '../component/inputTask';
import PersonalDoListTitle from '../component/personalToDoList';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import CheckInput from '../component/checkedInput';




function PersonalAsignment({ personalAssignment }) {

    const [assignment, setAssignment] = useState(personalAssignment)

    return (
        <div className="home-page">
            <PersonalDoListTitle />
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

export default PersonalAsignment;