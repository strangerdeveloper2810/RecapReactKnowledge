import React, { Component } from 'react'
import LikeProfile from './LikeProfile'
import ModalProfile from './ModalProfile'

export default class ContextDemo extends Component {
  render() {
    return (
      <div className='container'>
        <ModalProfile/>
        <LikeProfile/>
      </div>
    )
  }
}
