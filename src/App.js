import './App.css';
import React from 'react';

function App() {
  const[click,setClick] =React.useState(true)

  const[windowWidth,setWindowWidth]=React.useState(window.innerWidth)
  React.useEffect(()=>{
    function watchWidth(){
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize",watchWidth)
    return function(){
      window.removeEventListener("resize",watchWidth)
    }
  })
  function handleClick(){
  setClick(prevState=>!prevState)
  }
  
  return (
    <div className="App">
      <button className="button"
      onClick={handleClick}>Toggle Window Tracker</button>
      <br/>
      {click && <h1 className="head">{windowWidth}</h1>}
      
    </div>
  );
}

export default App;
