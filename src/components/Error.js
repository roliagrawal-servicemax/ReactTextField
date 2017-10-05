import React, { Component } from 'react';
class Error extends Component {
  render() {
    return (
      <div>
        <span>{this.props.children}</span>
      </div>
    )
  }
}
module.exports = Error;
