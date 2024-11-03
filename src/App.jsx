import React from "react"
import "./App.css"


function App(){

const red =()=>{
  document.body.style.backgroundColor= "red"

}
const green =()=>{
  document.body.style.backgroundColor = "green"
}
const blue =()=>{
  document.body.style.backgroundColor = "blue"
}
const reset =()=>{
  document.body.style.backgroundColor = "white"
}



  return(
<div  >
  <div className="container">Background Color Change</div>
<div className="button-container">
    <button onClick={red} className="red btn btn-danger" >Red</button>
    <button onClick={green }className ="btn btn-success" >Green</button>
    <button onClick={blue} className ="btn btn-primary">Blue</button>
    <button onClick={reset} className ="btn btn-light">Reset</button>
</div>
  
</div>
    
  )
}

export default App

