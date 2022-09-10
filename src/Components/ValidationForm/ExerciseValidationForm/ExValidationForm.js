import React, { Component } from 'react'
import FormSignUp from './FormSignUp'
import TableUser from './TableUser'

export default class ExValidationForm extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
            <div className="col-12">
                <FormSignUp/>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <TableUser/>
            </div>
        </div>
      </div>
    )
  }
}
