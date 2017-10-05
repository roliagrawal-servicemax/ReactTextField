import React, { Component } from 'react';
class Label extends Component {
  renderLabelField(labelFieldProps) {
   return (<div>
      <label>{labelFieldProps.children}</label>
     </div>)
  }

  render() {
    const labelFieldProps = this.props;
    return (
      this.renderLabelField(labelFieldProps)
    )
  }
}

module.exports = Label;
