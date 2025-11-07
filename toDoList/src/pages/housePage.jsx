import '../css/homePage.css';
import InputTask from '../component/inputTask';
import HouseToDoListTitle from '../component/houseToDoList';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import CheckInput from '../component/checkedInput';




function HouseAsignment({ houseAssignment }) {

    const [assignment, setAssignment] = useState(houseAssignment)

    return (
        <div className="home-page">
            <HouseToDoListTitle />
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

export default HouseAsignment;