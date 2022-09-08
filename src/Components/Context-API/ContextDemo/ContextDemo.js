import React, { Component } from "react";
import ModalProvider from "../Provider/ModalProvider";
import LikeProfile from "./LikeProfile";
import ModalProfile from "./ModalProfile";

export default class ContextDemo extends Component {
  render() {
    return (
      <ModalProvider>
        <div className="container">
          <ModalProfile />
          <LikeProfile />
        </div>
      </ModalProvider>
    );
  }
}
