import "./Box.css"
function Box({ width, height, color, deleteBox }) {
    const boxStyle = {
        width: `${width}rem`,
        height: `${height}rem`,
        backgroundColor: `${color}`
    }

    console.log(boxStyle)
    return (
        <div className="boxContainer">
            <div className="box" style={boxStyle}>
            </div>
            <button onClick={deleteBox}>x</button>
        </div>
    )
}

export default Box;