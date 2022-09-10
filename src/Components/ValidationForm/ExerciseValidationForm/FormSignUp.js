import React, { Component } from "react";
import Swal from "sweetalert2";
import "./ExValidationForm.css";
export default class FormSignUp extends Component {
  state = {
    // tạo 2 object để binding kết quả và lỗi
    values: {
      account: "",
      fullName: "",
      password: "",
      phone: "",
      email: "",
    },

    errors: {
      account: "",
      fullName: "",
      password: "",
      phone: "",
      email: "",
    },
  };

  handleChange = (event) => {
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
        newErrors[name] = name + " is invalid";
      } else {
        newErrors[name] = "";
      }
    }

    if (type === "password") {
      const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (regexPassword.test(value)) {
        newErrors[name] = "";
      } else {
        newErrors[name] =
          name + " at least 8 characters, 1 number, 1 upper and lowercase !";
      }
    }

    if (type === "phone") {
      const regexPhone =
        /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g;
      if (regexPhone.test(value)) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " Maximum phone number is 10 number";
      }
    }

    // switch (type) {
    //   case "email":
    //     {
    //       const regexEmail =
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //       if (!regexEmail.test(value)) {
    //         newErrors[name] = name + " is invalid";
    //       } else {
    //         newErrors[name] = "";
    //       }
    //     }
    //     break;

    //   case "password":
    //     {
    //       const regexPassword =
    //         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    //       if (regexPassword.test(value)) {
    //         newErrors[name] = "";
    //       } else {
    //         newErrors[name] =
    //           name +
    //           " at least 8 characters, 1 number, 1 upper and lowercase !";
    //       }
    //     }
    //     break;

    //   case "phoneNumber":
    //     {
    //       const regexPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    //       if (regexPhone.test(value)) {
    //         newErrors[name] = "";
    //       } else {
    //         newErrors[name] = name + " Maximum phone number is 10 numbers";
    //       }
    //     }
    //     break;
    //   default: {
    //     return ;
    //   }
    // }

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
      <div className="d-flex justify-content-center">
        <div className="backgroundContainer w-100">
          <h1 className="text-center">Form Đăng Ký</h1>
          <form className="w-100">
            <div className="container">
              <div className="row mt-4">
                <div className="col-6">
                  <div className="group">
                    <input
                      type="text"
                      value={this.state.values.account}
                      name="account"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                      required
                    />
                    <label>Tài Khoản</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span className="text-danger">
                      {this.state.errors.account}
                    </span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="group">
                    <input
                      type="text"
                      value={this.state.values.fullName}
                      name="fullName"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                      required
                    />
                    <label>Họ Tên</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span className="text-danger">
                      {this.state.errors.fullName}
                    </span>
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
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                      required
                    />
                    <label>Mật khẩu</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span className="text-danger">
                      {this.state.errors.password}
                    </span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="group">
                    <input
                      type="tel"
                      value={this.state.values.phone}
                      name="phone"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                      required
                    />
                    <label>Số điện thoại</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span className="text-danger">
                      {this.state.errors.phone}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input
                      type="email"
                      value={this.state.values.email}
                      name="email"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                      required
                    />
                    <label>Email</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span className="text-danger">
                      {this.state.errors.email}
                    </span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="group">
                    <span className="userID">Mã Loại Người Dùng</span>
                    <select>
                      <option>Khách Hàng</option>
                      <option>Quản Trị</option>
                    </select>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span className="text-danger"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="group ">
                    <button className="btn btn-success me-5">Đăng Kí</button>
                    <button className="btn btn-info">Cập nhật</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
