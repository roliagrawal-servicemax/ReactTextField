import React, { Component } from 'react';
class FormField extends Component {
  render() {
    return (<div>{this.props.children}</div>)
  }
}

module.exports = FormField;
