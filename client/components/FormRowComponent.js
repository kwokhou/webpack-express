import React from 'react'

import InputComponent from './InputComponent'

export default class FormRowComponent extends React.Component {
  render() {
    return (
    <div>
      <InputComponent></InputComponent>
      <div className="form-row">
        <label className="form-row__label">Name</label>
        <input className="form-row__input" type="text"></input>
      </div>
    </div>
    )
  }
}
