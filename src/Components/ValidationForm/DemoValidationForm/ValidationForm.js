import React, { Component } from "react";
import Swal from "sweetalert2";
import "./ValidationForm.css";
export default class ValidationForm extends Component {
  state = {
    // tạo 2 object để binding kết quả và lỗi
    values: {
      firstName: "a",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },

    errors: {
      firstName: "a",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    // type cho email
    // name là tên của các thuộc tính có trong state
    // value là giá trị của các thuộc tính có trong state
    const { name, value, type } = event.target;
    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newErrors[name] = name + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValues["password"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " is invalid!";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSubmit = (event) => {
    //Cản trình duyệt submit reload lại trang
    event.preventDefault();

    //  Xét điều kiện khi submit
    const { values, errors } = this.state;

    // Biến xác định form hợp lệ
    let valid = true;

    let profileContent = "";
    let errrorsContent = "";

    for (let key in values) {
        // values[key] là giá trị của từng values
      if (values[key] === "") {
        valid = false;
        errrorsContent = `<p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
      }
      profileContent += `
                <p class="text-left"> <b>${key}:</b> ${values[key]}</p>
            `;
    }

    for (let key in errors) {
        // errors[key] là giá trị của từng <error></error>
      if (errors[key] !== "") {
        errrorsContent += `
            <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
        valid = false;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Your profile!",
        html: errrorsContent,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
      return;
    }
    // alert('Thành công!')
    Swal.fire({
      title: "Your profile!",
      html: profileContent,
      icon: "success", //success, error, warning, question
      confirmButtonText: "OK",
    });
  };
  render() {
    return (
      <div className=" d-flex justify-content-center">
        <form
          className="w-50 bg-info bg-gradient p-5 m-5"
          onSubmit={this.handleSubmit}
        >
          <h1 className="text-primary text-center p-3">User Profile</h1>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    value={this.state.values.firstName}
                    name="firstName"
                    required
                    onChange={(event) => {
                      this.handleChangeValue(event);
                    }}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>First Name</label>
                  <span className="text-danger">
                    {this.state.errors.firstName}
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    value={this.state.values.lastName}
                    name="lastName"
                    required
                    onChange={(event) => {
                      this.handleChangeValue(event);
                    }}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Last Name</label>
                  <span className="text-danger">
                    {this.state.errors.lastName}
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    type="text"
                    value={this.state.values.userName}
                    name="userName"
                    required
                    onChange={(event) => {
                      this.handleChangeValue(event);
                    }}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>User Name</label>
                  <span className="text-danger">
                    {this.state.errors.userName}
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    type="email"
                    value={this.state.values.email}
                    name="email"
                    required
                    onChange={(event) => {
                      this.handleChangeValue(event);
                    }}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="password"
                    value={this.state.values.password}
                    name="password"
                    required
                    onChange={(event) => {
                      this.handleChangeValue(event);
                    }}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password</label>
                  <span className="text-danger">
                    {this.state.errors.password}
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="group">
                  <input
                    type="password"
                    value={this.state.values.passwordConfirm}
                    name="passwordConfirm"
                    required
                    onChange={(event) => {
                      this.handleChangeValue(event);
                    }}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password Confirm</label>
                  <span className="text-danger">
                    {this.state.errors.passwordConfirm}
                  </span>
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
