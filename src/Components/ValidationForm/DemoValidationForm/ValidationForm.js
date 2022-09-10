import React, { Component } from "react";
import "./ValidationForm.css";
export default class ValidationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };


  handleChangeValue = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value,
    },()=>{
        console.log(this.state);
    });
  }
  render() {
    return (
      <div className=" d-flex justify-content-center">
        <form className="w-50 bg-info bg-gradient p-5 m-5">
          <h1 className="text-primary text-center p-3">User Profile</h1>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input type="text" name="firstName" required onChange={(event)=>{this.handleChangeValue(event)}} />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>First Name</label>
                </div>
              </div>

              <div className="col-6">
                <div className="group">
                  <input type="text" name="lastName" required onChange={(event)=>{this.handleChangeValue(event)}} />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Last Name</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input type="text" name="userName" required onChange={(event)=>{this.handleChangeValue(event)}}/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>User Name</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input type="email" name="email" required onChange={(event)=>{this.handleChangeValue(event)}} />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input type="password" name="password" required onChange={(event)=>{this.handleChangeValue(event)}} />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password</label>
                </div>
              </div>

              <div className="col-6">
                <div className="group">
                  <input type="password" name="passwordConfirm" required onChange={(event)=>{this.handleChangeValue(event)}} />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password Confirm</label>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-success w-100 p-3 col-12">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
