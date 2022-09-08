import React, { Component } from "react";
import ListIdol from "./ListIdol";
import ProfileIdol from "./ProfileIdol";
import LikeIdolProvider from "../Provider/LikeIdolProvider";
export default class LikeIdol extends Component {
  render() {
    return (
      <LikeIdolProvider>
        <div className="container">
          <ProfileIdol />
          <ListIdol />
        </div>
      </LikeIdolProvider>
    );
  }
}
