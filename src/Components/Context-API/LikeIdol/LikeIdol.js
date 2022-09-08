import React, { Component } from 'react'
import ListIdol from './ListIdol'
import ProfileIdol from './ProfileIdol'

export default class LikeIdol extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <ProfileIdol/>
        <ListIdol/>
      </div>
    )
  }
}
