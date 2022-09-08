import React, { Component } from "react";
import LikeIdolContext from "../Context/LikeIdolContext";
export default class LikeIdolProvider extends Component {
  state = {
    listIdol: [
      {
        id: 1,
        name: "Đào Lê Phương Hoa",
        age: 23,
        img: "./img/idol/idol1.jpg",
        like: 0,
        active: true,
      },
      {
        id: 2,
        name: "Suni Hạ Linh",
        age: 25,
        img: "./img/idol/idol2.jpg",
        like: 0,
        active: false,
      },
      {
        id: 3,
        name: "Phương Ly",
        age: 27,
        img: "./img/idol/idol3.jpg",
        like: 0,
        active: false,
      },
      {
        id: 4,
        name: "Emmy Đặng",
        age: 26,
        img: "./img/idol/idol4.jpg",
        like: 0,
        active: false,
      },
    ],
  };

  setLikeAndActiveIdol = (id) => {
    let listIdolUpdate = this.state.listIdol.map((idol, index) => {
      // So sánh với id được click
      if (idol.id === id) {
        idol.active = true;
        idol.like += 1;
      } else {
        idol.active = false;
      }
      return { ...idol };
    });
    // Sau khi xử lý mảng cập nhật lại giá trị state để giao diện render lại
    this.setState({
      listIdol: listIdolUpdate,
    });
  };

  render() {
    return (
      <LikeIdolContext.Provider
        value={{
          listIdol: this.state.listIdol,
          setLikeAndActiveIdol: this.setLikeAndActiveIdol,
        }}
      >
        {this.props.children}
      </LikeIdolContext.Provider>
    );
  }
}
