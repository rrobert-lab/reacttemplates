//npm create vite@latest
// cd vite-project
// npm install
// npm run dev

//ReactDOM.render(<h1>Render in Dom</h1>, document.getElementById("root"))//what do you want to render and where do you want to render it
//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById(root))
// console.log(document.getElementById(root))

// function MainContent(){
//   return(
//       <h1>hi</h1>
//   )  
    
    
// }
// ReactDOM.render(
//     <div>
//         <Navbar />
//          <MainContent />
        
//     </div>,
//     document.getElementById("root")
// )

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))



// export default function Header() {
//   return (