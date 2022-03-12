import React, { useState } from "react";
import "./App.css";

function App() {
  //State (hooks)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  //Functions
  const displayInfo = () => {
    console.log(
      `name:${name}, age:${age}, country:${country}, position:${position}, wage:${wage}`
    );
  };

  return (
    <div className='App'>
      <div className='info-form'>
        <h1>Employee Register</h1>

        <div className='information'>
          <div className='label-input'>
            <label>Name: </label>
            <input
              type='text'
              onChange={event => setName(event.target.value)}></input>
          </div>

          <div className='label-input'>
            <label>Age: </label>
            <input
              type='number'
              onChange={event => setAge(event.target.value)}></input>
          </div>

          <div className='label-input'>
            <label>Country: </label>
            <input
              type='text'
              onChange={event => setCountry(event.target.value)}></input>
          </div>

          <div className='label-input'>
            <label>Position: </label>
            <input
              type='text'
              onChange={event => setPosition(event.target.value)}></input>
          </div>

          <div className='label-input'>
            <label>Wage(year): </label>
            <input
              type='number'
              onChange={event => setWage(event.target.value)}></input>
          </div>

          <button onClick={displayInfo}>Add Employee</button>
        </div>
      </div>
    </div>
  );
}

export default App;
