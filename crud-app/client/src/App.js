import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Nav from "./components/Nav";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import ShowEmployee from "./components/ShowEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/show' element={<ShowEmployee />} />
          <Route exact path='/create' element={<AddEmployee />} />
          <Route exact path='/delete' element={<DeleteEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
