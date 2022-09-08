import React, { Component } from 'react'
import ModalContext from '../Context/ModalContext'

export default class LikeProfile extends Component {
  render() {
    console.log("Loading LikeProfile");
    return (
      <div className='container mt-3'>
        <ModalContext.Consumer>
          {(value)=>{
            return(
              <button
              className='btn btn-primary'
              onClick={()=>{
                value.setLike()
              }}
              >
                {value.stateLike}❤️
              </button>
            );
          }}
        </ModalContext.Consumer>
      </div>
    )
  }
}
