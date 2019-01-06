import React, { Component } from "react";

class headerWrapper extends Component {
  render() {
    return (
      <div className="header-wraper">
        <h1>Welcome to Hoa Manager</h1>
        <p>Please login in to continue</p>
        {this.props.children}
      </div>
    );
  }
}

export default headerWrapper;
