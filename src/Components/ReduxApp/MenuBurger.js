import React, { Component } from "react";

export default class MenuBurger extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-success text-center">Menu Burger</h3>
        <div className="table-responsive">
          <table className="table table-primary text-center">
            <thead>
              <tr>
                <th>Thức Ăn</th>
                <th></th>
                <th>Đơn Giá</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Salad</td>
                <td>
                  <button className="btn btn-danger">-</button>1
                  <button className="btn btn-success">+</button>
                </td>
                <td>10</td>
                <td>10</td>
              </tr>

              <tr>
                <td>Cheese</td>
                <td>
                  <button className="btn btn-danger">-</button>1
                  <button className="btn btn-success">+</button>
                </td>
                <td>20</td>
                <td>20</td>
              </tr>

              <tr>
                <td>Beef</td>
                <td>
                  <button className="btn btn-danger">-</button>1
                  <button className="btn btn-success">+</button>
                </td>
                <td>55</td>
                <td>55</td>
              </tr>

            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={4}>
                        Thành tiền: 85
                    </td>
                </tr>
            </tfoot>

          </table>
        </div>
      </div>
    );
  }
}
