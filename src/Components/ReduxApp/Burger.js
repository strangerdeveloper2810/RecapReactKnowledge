import React, { Component } from 'react'
import "./Burger.css"
export default class Burger extends Component {
  render() {
    return (
      <div className='container'>
        <div className="breadTop"></div>
        <div className="salad"></div>
        <div className="beef"></div>
        <div className="cheese"></div>
        <div className="breadBottom"></div>
      </div>
    )
  }
}
