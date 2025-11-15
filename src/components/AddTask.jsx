import { useState } from "react"

export default function AddTask() {
    const [inputValue, setInputValue] = useState(['']);
    return(
        <div>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new task"/>
        <button className="AddTaskButton">Add Task</button>
        </div>
    )
}
function handleChange(event) {
    setInputValue(event.target.value);
}