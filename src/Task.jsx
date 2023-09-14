
function Task({ desc, removeMe }) {
    return (
        <li>
            <span>{desc}</span>
            <button onClick={removeMe}>X</button>
        </li>
    )
}

export default Task;