import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='info-form'>
        <h1>Employee Register</h1>
        <div className='information'>
          <div className='label-input'>
            <label>Name: </label>
            <input type='text'></input>
          </div>

          <div className='label-input'>
            <label>Age: </label>
            <input type='number'></input>
          </div>

          <div className='label-input'>
            <label>Country: </label>
            <input type='text'></input>
          </div>

          <div className='label-input'>
            <label>Position: </label>
            <input type='text'></input>
          </div>

          <div className='label-input'>
            <label>Wage (year): </label>
            <input type='number'></input>
          </div>

          <button>Add Employee</button>
        </div>
      </div>
    </div>
  );
}

export default App;
