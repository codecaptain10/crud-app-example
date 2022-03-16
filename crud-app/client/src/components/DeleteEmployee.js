import React, { useState } from "react";
import Axios from "axios";

function DeleteEmployee() {
  //State
  const [employeeList, setEmployeeList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newCountry, setNewCountry] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newWage, setNewWage] = useState(0);

  //Function to get employees
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then(response => {
      console.log(response.data);
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = (value, id) => {
    Axios.put("http://localhost:3001/update", {
      name: newName,
      age: newAge,
      country: newCountry,
      position: newPosition,
      wage: newWage,
      employee_id: id,
    }).then(response => {
      alert("Update");
    });
  };

  const deleteEmployee = id => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className='employee-list'>
      <h1>Delete Employee</h1>
      <div className='show-employees-btn'>
        <button onClick={getEmployees}>Click to Delete</button>

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
                <div className='delete-employee'>
                  <button
                    onClick={deleteEmployee(value.employee_id)}
                    className='delete-btn'>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DeleteEmployee;
