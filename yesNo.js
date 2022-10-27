import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
     let isGoingOut=true
     const [old, setNew]=React.useState(true)
    function Switch(){
        
        setNew(value=>(value==true)?false:true)
        console.log(old)
    }
   
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={Switch}>
                <h1>{old==true?"Yes":"No"}</h1>
            </div>
        </div>
    )
}
