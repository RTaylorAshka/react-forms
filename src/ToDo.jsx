import { useState } from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

function ToDo() {

    const [tasks, setTasks] = useState([]);

    function removeTask(idx) {
        setTasks(tasks.filter((t, i) => i != idx));
    }

    function addTask(desc) {
        setTasks([...tasks, desc])
    }

    return (
        <div>
            <h1>To Do's</h1>
            <NewTaskForm addTask={addTask} />
            <ul>
                {tasks.map((t, idx) => <Task desc={t} key={idx} removeMe={() => removeTask(idx)} />)}

            </ul>
        </div>
    )
}




export default ToDo;