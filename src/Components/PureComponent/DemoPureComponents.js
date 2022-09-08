import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoPureComponents extends Component {
  //   state = {
  //     like: 0,
  //   };

  //   likeImage = () => {
  //     this.setState({
  //         like: this.state.like,
  //     });
  //   }

  //   Không lạm dụng PureComponent
  state = {
    like: {soLuong:0} // là object chứ không phải là kiểu dữ liệu nguyên thủy
  }

  likeImage = () => {
    let currentLike = this.state.like;
    currentLike.soLuong += 1;
    this.setState({
        // component sẽ không load lại
        // like: currentLike 
        like: {...currentLike}
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-success">Profile</h3>
        <Profile like={this.state.like} />

        <div className="card bg-success text-white mt-3">
          <h3 className="text-primary">
            Số lượt thả tim: {this.state.like.soLuong} ❤️
          </h3>
          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.likeImage();
              }}
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    );
  }
}
