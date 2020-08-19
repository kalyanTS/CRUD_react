import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Employee = (props) => (
  <tr>
    <th scope='col'>{props.employee.name}</th>
    <th scope='col'>{props.employee.phoneNumber}</th>
    <th scope='col'>{props.employee.designation}</th>
    <th scope='col'>
      <Link to={"/update/" + props.employee._id}>Edit</Link>
      <button
        className='btn-sm btn-danger ml-2'
        onClick={() => {
          props.deleteEmployee(props.employee._id);
        }}>
        Delete
      </button>
    </th>
  </tr>
);

export default class employeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseArr: [],
    };

    axios.get("http://localhost:5001/employees/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          databaseArr: res.data,
        });
      }
    });
  }

  deleteEmployee = (id) => {
    axios
      .delete("http://localhost:5001/employees/" + id)
      .then((res) => console.log(res));
    this.setState({
      databaseArr: this.state.databaseArr.filter((elem) => elem._id != id),
    });
  };

  giveList = () => {
    return this.state.databaseArr.map((elem) => {
      return (
        <Employee
          employee={elem}
          deleteEmployee={this.deleteEmployee}
          key={elem._id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>
                <strong>Name</strong>
              </th>
              <th scope='col'>
                <strong>Phone number</strong>
              </th>
              <th scope='col'>
                <strong>Designation</strong>
              </th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>{this.giveList()}</tbody>
        </table>
      </div>
    );
  }
}
