import React, { Component } from "react";

export default class FormInputs extends Component {
  render() {
    const { className, title, input, type, placeholder } = this.props;
    return (
      <div className="form-input">
        <lable className="form-input__title">{title}</lable>
        <input
          className={`${className} form-input__input`}
          type={type}
          {...input}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
