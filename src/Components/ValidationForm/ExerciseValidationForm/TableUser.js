import React, { Component } from "react";

export default class TableUser extends Component {
  render() {
    return (
      <div className="container-fluid mt-3" style={{backgroundColor: "rgb(124, 31, 243)"}}>
        <h1 className="text-info">Danh sách người dùng</h1>
        <div className="table-responsive">
          <table className="table table-primary text-center">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tài Khoản</th>
                <th>Họ Tên</th>
                <th>Mật Khẩu</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Loại Người Dùng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>demo</td>
                <td>Nguyễn Văn A</td>
                <td>123456</td>
                <td>demo@yahoo.com</td>
                <td>0123456789</td>
                <td>Khách Hàng</td>
                <td>
                    <button className="btn btn-info me-2">Chỉnh sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>demo1</td>
                <td>Nguyễn Văn B</td>
                <td>123456</td>
                <td>demo1@yahoo.com</td>
                <td>0323456789</td>
                <td>Quản Trị</td>
                <td>
                    <button className="btn btn-info me-2">Chỉnh sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
