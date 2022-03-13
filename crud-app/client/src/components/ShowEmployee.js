import React, { useState } from "react";
import Axios from "axios";

function ShowEmployee() {
  //State
  const [employeeList, setEmployeeList] = useState([]);

  //Function to get employees
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then(response => {
      console.log(response.data);
      setEmployeeList(response.data);
    });
  };

  return (
    <div className='employee-list'>
      <h1>Show Employees</h1>
      <div className='show-employees-btn'>
        <button onClick={getEmployees}>Show Employess</button>
        <div className='list'>
          {employeeList.map((value, key) => {
            return (
              <div className='employee-card'>
                <div className='card-part1'>
                  <div key={value.name}>Name: {value.name}</div>
                  <div key={value.age}>Age: {value.age}</div>
                </div>
                <div className='card-part2'>
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

export default ShowEmployee;
