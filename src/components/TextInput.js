import React, { Component } from 'react';
class TextInput extends Component {
  render() {
    const {
      readOnly,
      placeholder,
      disable,
      value,
      onChange,
      onBlur
    } = this.props;
    return (<div>
         <input type="text" value={value}
         readOnly={readOnly}
         readOnly={disable}
         placeholder={placeholder}
         onChange={(e)=>onChange(e)}
         onBlur={(e)=>onBlur(e)}/>
      </div>)
  }
}

module.exports = TextInput;
