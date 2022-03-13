import React, { useState } from "react";
import Axios from "axios";

function ShowEmployee() {
  //State
  const [employeeList, setEmployeeList] = useState([]);

  //Function to get employees
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then(response => {
      console.log(response.data);
    });
  };

  return (
    <div className='info-form'>
      <h1>Show Employees</h1>
      <div className='show-employees-btn'>
        <button onClick={getEmployees}>Show Employess</button>
      </div>
    </div>
  );
}

export default ShowEmployee;
