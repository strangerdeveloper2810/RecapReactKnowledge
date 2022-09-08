import React, { Component } from "react";
import LikeIdolContext from "../Context/LikeIdolContext";
export default class LikeIdolProvider extends Component {
 

  render() {
    return (
      <LikeIdolContext.Provider>{this.props.children}</LikeIdolContext.Provider>
    );
  }
}
