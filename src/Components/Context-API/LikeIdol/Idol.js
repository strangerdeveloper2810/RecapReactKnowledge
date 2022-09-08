import React, { Component } from "react";
import LikeIdolContext from "../Context/LikeIdolContext";

export default class Idol extends Component {
  render() {
    const { idol } = this.props;
    return (
      <div className="col-3">
        <LikeIdolContext.Consumer>
          {(value) => {
            return (
              <div
                className="card bg-primary bg-gradient"
                style={{ width: "300px", height: "500px" }}
              >
                <img
                  className="card-img-top"
                  src={idol.img}
                  width={300}
                  height={350}
                  alt={idol.name}
                />
                <div className="card-body text-sencondary">
                  <h4 className="card-title fs-5">Tên: {idol.name}</h4>
                  <p className="card-text">Tuổi: {idol.age}</p>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      value.setLikeAndActiveIdol(idol.id);
                    }}
                  >
                    {" "}
                    {idol.like}❤️
                  </button>
                </div>
              </div>
            );
          }}
        </LikeIdolContext.Consumer>
      </div>
    );
  }
}
