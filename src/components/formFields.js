import React, { Component } from "react";

export default class FormInputs extends Component {
  render() {
    const { className, title } = this.props;
    return (
      <div className="form-input">
        <lable>{title}</lable>
        <input className={`${className} form-input`} />
      </div>
    );
  }
}
