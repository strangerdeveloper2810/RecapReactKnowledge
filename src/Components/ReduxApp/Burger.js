import React, { Component } from 'react'
import "./Burger.css";
import {connect} from "react-redux"
class Burger extends Component {
   renderBreadMid = () => {
    const {burger} = this.props;
    return Object.entries(burger).map(([propsBurger, value], index)=>{
        let breadMid = [];
        for(let index = 0; index < value; index++) {
            breadMid.push(
                <div className={propsBurger} key={index}></div>
            );
        }
        return breadMid;
    });
   }
  render() {
    return (
      <div className='container'>
        <div className="breadTop"></div>
       {this.renderBreadMid()}
        <div className="breadBottom"></div>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return{
        burger: state.BurgerReducer.burger,
    }
}
export default connect(mapStateToProps)(Burger);
