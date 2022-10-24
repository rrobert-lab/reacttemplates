//ReactDOM.render(<h1>Render in Dom</h1>, document.getElementById("root"))//what do you want to render and where do you want to render it
//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById(root))
console.log(document.getElementById(root))

function MainContent(){
  return(
      <h1>hi</h1>
  )  
    
    
}
ReactDOM.render(
    <div>
        <Navbar />
         <MainContent />
        
    </div>,
    document.getElementById("root")
)
