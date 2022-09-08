import React, { Component } from "react";

export default class ListIdol extends Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <h4 className="text-success">Danh Sách Idol</h4>
        <div className="row">
          <div className="col-3">
            <div
              className="card bg-primary bg-gradient"
              style={{ width: "300px", height: "500px" }}
            >
              <img
                className="card-img-top"
                src="./img/idol/idol1.jpg"
                width={300}
                height={350}
                alt="idol"
              />
              <div className="card-body text-sencondary">
                <h4 className="card-title fs-5">Tên: Đào Lê Phương Hoa</h4>
                <p className="card-text">Tuổi: 23</p>
                <button className="btn btn-info"> ❤️</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div
              className="card bg-primary bg-gradient"
              style={{ width: "300px", height: "500px" }}
            >
              <img
                className="card-img-top"
                src="./img/idol/idol1.jpg"
                width={300}
                height={350}
                alt="idol"
              />
              <div className="card-body text-sencondary">
                <h4 className="card-title fs-5">Tên: Đào Lê Phương Hoa</h4>
                <p className="card-text">Tuổi: 23</p>
                <button className="btn btn-info"> ❤️</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div
              className="card bg-primary bg-gradient"
              style={{ width: "300px", height: "500px" }}
            >
              <img
                className="card-img-top"
                src="./img/idol/idol1.jpg"
                width={300}
                height={350}
                alt="idol"
              />
              <div className="card-body text-sencondary">
                <h4 className="card-title fs-5">Tên: Đào Lê Phương Hoa</h4>
                <p className="card-text">Tuổi: 23</p>
                <button className="btn btn-info"> ❤️</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div
              className="card bg-primary bg-gradient"
              style={{ width: "300px", height: "500px" }}
            >
              <img
                className="card-img-top"
                src="./img/idol/idol1.jpg"
                width={300}
                height={350}
                alt="idol"
              />
              <div className="card-body text-sencondary">
                <h4 className="card-title fs-5">Tên: Đào Lê Phương Hoa</h4>
                <p className="card-text">Tuổi: 23</p>
                <button className="btn btn-info"> ❤️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
