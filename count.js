import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
     const [things, setThings] = React.useState(0);
    function plus(){
          setThings(things+1)
    }
     function sub(){
        setThings(things-1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={sub}>–</button>
            <div className="counter--count">
                <h1>{things}</h1>
            </div>
            <button className="counter--plus" onClick={plus}>+</button>
        </div>
    )
}
//    function add() {
//   setCount(prevCount => prevCount + 1)
// }