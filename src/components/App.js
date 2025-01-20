
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {


  const[inputValue,setInputValue] = useState("");

  const handleInput = (event)=>{
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const[showValue,setShowValue] = useState(false);

  const handleSubmit = ()=>{
    if(inputValue===null || inputValue==="")
    {
      alert("Please enter a valid UserName");
    }
    else{
      setShowValue(true);
    }
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="username" >Enter your Name:</label>
        <input type="text" id="username" name="username" value={inputValue} onChange={handleInput}/>
        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        {showValue && <p>'Hello {inputValue}!'</p>}
    </div>
  )
}

export default App
