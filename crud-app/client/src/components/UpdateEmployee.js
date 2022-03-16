import React, { useState } from "react";
import Axios from "axios";

function UpdateEmployee() {
  //State
  const [employeeList, setEmployeeList] = useState([]);
  const [newWage, setNewWage] = useState(0);

  //Function to get employees
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then(response => {
      console.log(response.data);
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = id => {
    Axios.put("http://localhost:3001/update", {
      wage: newWage,
      employee_id: id,
    }).then(response => {
      alert("Update");
    });
  };

  return (
    <div className='employee-list'>
      <h1>Update Employee</h1>
      <div className='show-employees-btn'>
        <button onClick={getEmployees}>Show Employess</button>

        <div className='list'>
          {employeeList.map((value, key) => {
            return (
              <div className='update-employee'>
                <div className='actual-data'>
                  <div key={value.name}>Name: {value.name}</div>
                  <div key={value.age}>Age: {value.age}</div>
                  <div key={value.country}>Country: {value.country}</div>
                  <div key={value.position}>Position: {value.position}</div>
                  <div key={value.wage}>Wage: {value.wage}</div>
                </div>
                <div className='new-data'>
                  <div className='simple-data'>
                    <input
                      type='text'
                      placeholder='2000...'
                      onChange={event => {
                        setNewWage(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateEmployee(value.employee_id);
                      }}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;
