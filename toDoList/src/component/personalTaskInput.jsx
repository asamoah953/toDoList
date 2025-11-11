import '../css/inputTask.css'
import { useState, useRef, useEffect, createContext } from "react";
import { IoMdAdd } from "react-icons/io";




function PersonlTaskInput({ assignment, setAssignment }) {


  const [text, setText] = useState('');
  const inputRef = useRef(null);

  function AddToList() {
    if (!text.trim()) return;

        let id;
        if (assignment.length === 0) {
            id = 1;
        } else {
            id = assignment[assignment.length - 1].id + 1;
        }

           let newData = {
            id,
            task: text
        };

    setAssignment([...assignment, newData]);

    setText(' ');
  }

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

        <IoMdAdd className="add-icon" onClick={AddToList} />
      </form>
    </div>

  )
}

export default PersonlTaskInput;