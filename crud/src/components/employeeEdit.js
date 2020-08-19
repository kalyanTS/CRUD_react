import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class employeeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      designation: "",
    };

    axios
      .get(
        "http://localhost:5001/employees/" + window.location.href.substring(31)
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          phoneNumber: res.data.phoneNumber,
          designation: res.data.designation,
        });
      })
      .catch((err) => console.log(err));
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
      .post(
        "http://localhost:5001/employees/update/" +
          window.location.href.substring(31),
        employee
      )
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
