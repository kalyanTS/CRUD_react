import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class employeeAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      designation: "",
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  onChangeDesignation = (e) => {
    this.setState({ designation: e.target.value });
  };

  onSubmission = (e) => {
    e.preventDefault();
    const employee = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      designation: this.state.designation,
    };

    console.log(employee);

    axios
      .post("http://localhost:5001/employees/add", employee)
      .then((employee) => console.log(employee));

    this.setState({
      name: "",
      phoneNumber: "",
      designation: "",
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>Add new employee</h1>
        <form onSubmit={this.onSubmission}>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput'>Name</label>
            <input
              value={this.state.name}
              onChange={this.onChangeName}
              type='text'
              className='form-control'
              id='formGroupExampleInput'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput2'>Phone Number</label>
            <input
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNumber}
              type='text'
              className='form-control'
              id='formGroupExampleInput2'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput2'>Designation</label>
            <input
              value={this.state.designation}
              onChange={this.onChangeDesignation}
              type='text'
              className='form-control'
              id='formGroupExampleInput2'
            />
          </div>
          <div className='form-group'>
            <input type='submit' className='btn btn-primary' />
          </div>
        </form>
      </div>
    );
  }
}
