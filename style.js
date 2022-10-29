import React from "react"
import boxes from "./boxes"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const styles = {
        backgroundColor: "black"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}