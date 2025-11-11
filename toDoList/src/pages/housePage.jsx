import '../css/homePage.css';
import HomeTaskInput from '../component/homeTaskInput';
import HouseToDoListTitle from '../component/houseToDoList';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import CheckInput from '../component/checkedInput';
import EmptyList from '../component/emtyList';




function HouseAsignment({ houseAssignment }) {

    const [assignment, setAssignment] = useState(houseAssignment );

  function DeleteTask(assigned) {
        const newList = assignment.filter(item => item.id !== assigned.id);
        setAssignment(newList);

        // Optional: update localStorage
        localStorage.setItem("assignment", JSON.stringify(newList));
    }

    return (
        <div className="home-page">
            <HouseToDoListTitle />
            <HomeTaskInput setAssignment = {setAssignment} assignment={assignment}/>


            { assignment.length ?  assignment && assignment.map((assigned) => (
                <div key={assigned.id} className="assignment">
                    <div className="left">
                        <CheckInput className ="checkBox"/>
                        <span className="task-text">{assigned.task}</span>
                    </div>

                    <MdDelete className="delete-icon" onClick={()=>DeleteTask(assigned)}/>
                </div>
            )):<EmptyList />
        }



        </div>
    )
}

export default HouseAsignment;