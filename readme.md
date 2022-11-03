https://scrimba.com/learn/learnreact/setting-state-from-child-components-co5104ccd8360769343dc8e51
passing a click button function...


passing a prop click

https://scrimba.com/learn/learnreact/boxes-challenge-part-32-unified-state-coc544380b8da728809b4b5f2


    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}

    https://scrimba.com/learn/learnreact/boxes-challenge-part-5-cobdb4d3e907fa304af4b9958