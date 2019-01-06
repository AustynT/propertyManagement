import React, { Component } from "react";
import HeaderBar from "./headerBar";
class HeaderWrapper extends Component {
  render() {
    return [
      <div className="header-wrapper">
        <h1 className="header-wrapper__title">Welcome to Hoa Manager</h1>
        <p className="header-wrapper__subtitle">Please login in to continue</p>
      </div>,
      HeaderBar(),
      this.props.children
    ];
  }
}

export default HeaderWrapper;
