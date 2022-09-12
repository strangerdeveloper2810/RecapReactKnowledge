import React, { Component } from "react";
import { connect } from "react-redux";

class TableUser extends Component {
  renderUserList = () => {
    const { userList, typeOfUser } = this.props;
    console.log(typeOfUser.name);
    return userList.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.account}</td>
          <td>{user.fullName}</td>
          <td>{user.password}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{typeOfUser.name}</td>
          <td>
            <button className="btn btn-info me-2">Chỉnh sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="container-fluid mt-3"
        style={{ backgroundColor: "rgb(124, 31, 243)" }}
      >
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
              {/*  */}
              {this.renderUserList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.ValidationFormReducer.userList,
    typeOfUser:  state.ValidationFormReducer.typeOfUser
  };
};
export default connect(mapStateToProps)(TableUser);
