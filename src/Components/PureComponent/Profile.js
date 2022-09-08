import React, { PureComponent } from "react";

export default class Profile extends PureComponent {
    // Nó sẽ kiểm tra props đầu vào, nếu props thay đổi thì component này mới load lại, props không đổi thì component này không load lại

    // Do ở component cha mình đã truyền cho component này 1 props là like để binding số lượt like lên giao diện, và ở component cha mình mình có phương thức setState cho biến like khi click vào button thì like sẽ được tăng lên 1 đơn vị. Vì props truyền vào có sự thay đổi nên component này sẽ được load lại khi mỗi lần setState. Mình có để console.log("Loading Profile") để kiểm tra xem component này có load lại hay không

    // Nếu ở component cha mình không truyền props cho nó thì đương nhiên là component này sẽ không được loại lại vì mình có truyền props cho nó đâu, hoặc là mình vẫn truyền props cho nó nhưng ở phương thức setState ở component cha thì mình sẽ giữ nguyên giá trị của biến like, nghĩa là khi ta click vào nút button thì lượt like không đổi nên props bên component con cũng không thay đổi => component con sẽ không load lại.
  render() {
    console.log("Loading Profile");
    return (
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
            <h3 className="text-danger">Lượt thả tim: {this.props.like.soLuong}❤️</h3>
          <h4 className="card-title">Hot Girl </h4>
          <p className="card-text">Tuổi: 18</p>
        </div>
      </div>
    );
  }
}
