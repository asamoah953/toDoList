import '../css/inputTask.css'
import { useState, useRef, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";




function HomeTaskInput({ assignment, setAssignment }) {

    const [text, setText] = useState('');
    const inputRef = useRef(null);

    function addToHomeTask() {
            let id = assignment[assignment.length - 1].id + 1;
            let newData = {
                id:id,
                task:`${text}`
            }

            let newData1 = [...assignment, newData];
             setAssignment(newData1);
            localStorage.setItem('assignment', JSON.stringify(newData1))

            setText('');
    }

    useEffect(()=>{
        let saved = localStorage.getItem('assignment');
        if(saved) JSON.parse(saved)
    })

    useEffect(() => {
        inputRef.current.focus();
    })

    function handleSunbmit(e) {
        e.preventDefault(e);
        setText('')
    }

    return (
        <div className="todo-input-wrapper">
            <form onSubmit={handleSunbmit} className="todo-form">
                <input
                    type="text"
                    placeholder="What do you need to get done today?"
                    value={text}
                    ref={inputRef}
                    onChange={(e) => setText(e.target.value)}
                    className="todo-input"
                />

                <IoMdAdd className="add-icon"  onClick={addToHomeTask}/>
            </form>
        </div>

    )
}

export default HomeTaskInput;