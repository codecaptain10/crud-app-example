import React, { useState } from "react";
import Axios from "axios";

function UpdateEmployee() {
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
    /* 
    //Idea if something is emptys

    if (newName == "") {
      setNewName(value.name);
    }

    if (newAge == "") {
      setNewAge(value.age);
    }

    if (newCountry == "") {
      setNewCountry(value.country);
    }

    if (newPosition == "") {
      setNewPosition(value.position);
    }

    if (newWage == "") {
      setNewWage(value.wage);
    }

    */

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

  return (
    <div className='employee-list'>
      <h1>Update Employee</h1>
      <div className='show-employees-btn'>
        <button onClick={getEmployees}>Click to Update Data</button>

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
                      placeholder={value.name}
                      onChange={event => {
                        setNewName(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateEmployee(value, value.employee_id);
                      }}>
                      Update
                    </button>
                  </div>
                  <div className='simple-data'>
                    <input
                      type='text'
                      placeholder={value.age}
                      onChange={event => {
                        setNewAge(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateEmployee(value, value.employee_id);
                      }}>
                      Update
                    </button>
                  </div>
                  <div className='simple-data'>
                    <input
                      type='text'
                      placeholder={value.country}
                      onChange={event => {
                        setNewCountry(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateEmployee(value, value.employee_id);
                      }}>
                      Update
                    </button>
                  </div>
                  <div className='simple-data'>
                    <input
                      type='text'
                      placeholder={value.position}
                      onChange={event => {
                        setNewPosition(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateEmployee(value, value.employee_id);
                      }}>
                      Update
                    </button>
                  </div>
                  <div className='simple-data'>
                    <input
                      type='text'
                      placeholder='value.wage'
                      onChange={event => {
                        setNewWage(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateEmployee(value, value.employee_id);
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
