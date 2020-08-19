import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item m-1'>
            <Link className='navbar-brand' to='/'>
              Employees list
            </Link>
          </li>
          <li className='navbar-item m-1'>
            <Link className='navbar-brand' to='/add'>
              Add new
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
