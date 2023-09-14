
import { useState } from "react";

function NewBoxForm({ addBox }) {
    const INITIAL_VALUES = {
        width: 3,
        height: 3,
        color: '#e66465'
    }
    const [input, setInput] = useState(INITIAL_VALUES)

    function handleInput(e) {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        addBox({
            width: (e.target.width.value),
            height: (e.target.height.value),
            color: (e.target.color.value)
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input onChange={handleInput} id="width" name="width" type="range" min={3} max={7} value={input.width}></input>

            <label htmlFor="height">Height</label>
            <input onChange={handleInput} id="height" name="height" type="range" min={3} max={7} value={input.height}></input>

            <label htmlFor="color">Color</label>
            <input onChange={handleInput} type="color" name="color" id="color" value={input.color} />

            <button>create</button>
        </form>
    )
}

export default NewBoxForm;