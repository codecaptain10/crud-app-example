const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Julia1010", //or password: 'password' or ""
  database: "employeeSystem",
});

//Endpoint POST to add a new employee
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//Endpoint GET to get the employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      res.send(result);
    }
  });
});

//Endpoint PUT to update the db
app.put("/update", (req, res) => {
  const employee_id = req.body.employee_id;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "UPDATE employees SET  name = ?, age = ?, country = ?, position = ?, wage = ? WHERE employee_id = ?",
    [name, age, country, position, wage, employee_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Endpoint DELETE to remove an element
app.delete("/delete/:employee_id", (req, res) => {
  const id = req.params.employee_id;

  db.query("DELETE FROM employees WHERE employee_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Server listen
app.listen(3001, () => {
  console.log("Server is working on port 3001");
});
