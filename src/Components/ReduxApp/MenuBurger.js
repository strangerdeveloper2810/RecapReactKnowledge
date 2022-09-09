import React, { Component } from "react";
import { connect } from "react-redux";
class MenuBurger extends Component {
  renderMenu = () => {
    const { burger, menu } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button className="btn btn-danger">-</button>
            {burger[propsMenu]}
            <button className="btn btn-success">+</button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
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

            <tbody>{this.renderMenu()}</tbody>

            <tfoot>
              <tr>
                <td colSpan={4}>Thành tiền: {this.props.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

export default connect(mapStateToProps)(MenuBurger);
