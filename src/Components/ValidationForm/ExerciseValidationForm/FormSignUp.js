import React, { Component } from "react";
import "./ExValidationForm.css";
export default class FormSignUp extends Component {
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
                    <input type="text" name="account" required />
                    <label>Tài Khoản</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="group">
                    <input type="text" name="fullName" required />
                    <label>Họ Tên</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input type="text" name="password" required />
                    <label>Mật khẩu</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="group">
                    <input type="tel" name="phoneNumber" required />
                    <label>Số điện thoại</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input type="email" name="email" required />
                    <label>Email</label>
                    <span className="highlight"></span>
                    <span className="bar"></span>
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
