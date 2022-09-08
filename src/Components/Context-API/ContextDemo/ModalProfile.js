import React, { Component } from "react";

export default class ModalProfile extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-success">Profile</h3>
        <div
          className="card bg-dark text-white"
          style={{ width: "300px", height: "500px" }}
        >
          <img
            className="card-img-top"
            src="https://cdn.24h.com.vn/upload/4-2021/images/2021-10-23/anh-2-1634958379-252-width650height813.jpg"
            alt="Title"
            width={300}
            height={350}
          />
          <div className="card-body">
            <h3 className="text-danger">Lượt thả tim: ❤️</h3>
            <h4 className="card-title">Hot Girl </h4>
            <p className="card-text">Tuổi: 18</p>
          </div>
        </div>
      </div>
    );
  }
}
