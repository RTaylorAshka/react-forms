import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxMaker() {

    const [boxes, setBoxes] = useState([])

    function addBox({ width, height, color }) {
        setBoxes([...boxes, { width, height, color }])
    }

    function deleteBox(idx) {
        setBoxes(boxes.filter((t, i) => i != idx));
    }

    return (
        <div>
            <h1>Box Maker</h1>
            <NewBoxForm addBox={addBox} />
            {boxes.map((b, idx) => <Box width={b.width} height={b.height} color={b.color} deleteBox={() => deleteBox(idx)} key={idx} />)}


        </div>
    )

}

export default BoxMaker;