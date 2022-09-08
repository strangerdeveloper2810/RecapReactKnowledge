import React, { Component } from "react";
import LikeIdolContext from "../Context/LikeIdolContext";
import Idol from "./Idol";

export default class ListIdol extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h4 className="text-success">Danh Sách Idol</h4>
        <LikeIdolContext.Consumer>
          {(value) => {
            return (
              <div className="row">
                {value.listIdol.map((idol, index) => {
                  return <Idol key={index} idol={idol} />;
                })}
              </div>
            );
          }}
        </LikeIdolContext.Consumer>
      </div>
    );
  }
}
