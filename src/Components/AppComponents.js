import React, { Component } from 'react'
import LikeIdol from './Context-API/LikeIdol/LikeIdol'
// import ContextDemo from './Context-API/ContextDemo/ContextDemo'
// import DemoPureComponents from './PureComponent/DemoPureComponents'

export default class AppComponents extends Component {
  render() {
    return (
      <div>
        {/* <DemoPureComponents/> */}
        {/* <ContextDemo/> */}
        <LikeIdol/>
      </div>
    )
  }
}
