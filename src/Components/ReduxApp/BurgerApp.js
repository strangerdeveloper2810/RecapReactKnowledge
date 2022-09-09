import React, { Component } from 'react'
import Burger from './Burger'
import MenuBurger from './MenuBurger'

export default class BurgerApp extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <h3 className="text-success text-center">Burger App</h3>
        <div className="row">
            <div className="col-8">
                <Burger/>
            </div>

            <div className="col-4">
                <MenuBurger/>
            </div>
        </div>
      </div>
    )
  }
}
