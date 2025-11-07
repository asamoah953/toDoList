import '../css/inputTask.css'
import { useState, useRef, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";


function InputTask(){

    const [text,setText] = useState(null);
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    function handleSunbmit(e) {
        e.preventDefault(e);
        setText('')
    }

    return(
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

    <IoMdAdd className="add-icon" />
  </form>
</div>

    )
}

export default InputTask;