import React, { Component } from "react";
import LikeIdolContext from "../Context/LikeIdolContext";

export default class ProfileIdol extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-success text-center">Profile</h3>
        <LikeIdolContext.Consumer>
          {(value) => {
            let activeIdol = value.listIdol.find(idol => idol.active === true);
            return (
              <div
                className="card bg-primary bg-gradient"
                style={{
                  width: "300px",
                  height: "500px",
                  position: "relative",
                  left: "500px",
                }}
              >
                <img
                  className="card-img-top"
                  src={activeIdol.img}
                  width={300}   
                  height={350}
                  alt="idol"
                />
                <div className="card-body text-sencondary">
                  <h4 className="card-title fs-5">Tên: {activeIdol.name}</h4>
                  <p className="card-text">Tuổi: {activeIdol.age}</p>
                  <p className="card-text">Lượt thích: {activeIdol.like} ❤️</p>
                </div>
              </div>
            );
          }}
        </LikeIdolContext.Consumer>
      </div>
    );
  }
}
