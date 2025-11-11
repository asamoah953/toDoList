import '../css/homePage.css';
import PersonlTaskInput from '../component/personalTaskInput';
import PersonalDoListTitle from '../component/personalToDoList';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import CheckInput from '../component/checkedInput';
import EmptyList from '../component/emtyList';




function PersonalAsignment({ personalAssignment }) {

    const [assignment, setAssignment] = useState(personalAssignment);

    function Deltask(assigned){
        let del = assignment.filter(item => item.id !== assigned.id);
        setAssignment(del)
    }

    return (
        <div className="home-page">
            <PersonalDoListTitle />
            <PersonlTaskInput  assignment={assignment} setAssignment ={setAssignment}/>


            {assignment.length ?  assignment.map((assigned) => (
                <div key={assigned.id} className="assignment">
                    <div className="left">
                        <CheckInput className ="checkBox"/>
                        <span className="task-text">{assigned.task}</span>
                    </div>

                    <MdDelete className="delete-icon" onClick={()=>Deltask(assigned)}/>
                </div>
            )):<EmptyList />
        }



        </div>
    )
}

export default PersonalAsignment;