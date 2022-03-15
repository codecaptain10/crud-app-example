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

  return (
    <div className='employee-list'>
      <h1>Update Employee</h1>
      <div className='show-employees-btn'>
        <div className='buttons'>
          <button onClick={getEmployees}>Show Employess</button>
          <button onClick={UpdateEmployee}>Update Employess</button>
        </div>

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
                  <div key={value.name}>Name: {value.name}</div>
                  <div key={value.age}>Age: {value.age}</div>
                  <div key={value.country}>Country: {value.country}</div>
                  <div key={value.position}>Position: {value.position}</div>
                  <div key={value.wage}>Wage: {value.wage}</div>
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
