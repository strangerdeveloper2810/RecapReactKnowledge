import React, { Component } from 'react'
import ModalContext from '../Context/ModalContext'

export default class ModalProvider extends Component {
    state = {
        like: 0,
    }

    setLike = () => {
        this.setState({
            like: this.state.like +1,
        });
    }
  render() {
    return (
      <ModalContext.Provider value={{stateLike: this.state.like, setLike: this.setLike}}>
        {/* Phạm vi sử dụng content */}
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}
