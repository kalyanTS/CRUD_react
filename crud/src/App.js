import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import employeeList from "./components/employeeList";
import employeeAdd from "./components/employeeAdd";
import employeeEdit from "./components/employeeEdit";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path='/' exact component={employeeList} />
      <Route path='/add' component={employeeAdd} />
      <Route path='/update' component={employeeEdit} />
    </Router>
  );
}

export default App;
