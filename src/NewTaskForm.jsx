import { useState } from "react";
function NewTaskForm({ addTask }) {


    const [task, setTask] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        addTask(e.target.task.value);
        setTask('')
    }

    function handleInput(e) {
        setTask(e.target.value);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Task:</label>
            <input name="task" id="task" placeholder="walk the cat" value={task} onChange={handleInput}></input>
            <button>add</button>
        </form>
    )
}

export default NewTaskForm;