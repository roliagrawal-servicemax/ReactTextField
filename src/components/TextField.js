import React, { Component } from 'react';
import FormField from '../components/FormField';
import Label from '../components/Label';
import TextInput from '../components/TextInput';
import Error from '../components/Error';
class TextField extends Component {
  constructor() {
    super();
    this.state = { data:'',
                  message:'',
                  valid:true
                };
  }
  onChangeHandler(event) {
    this.textValidation(event.target.value);
  }

  onBlurHandler(event) {
    this.requiredValidation(event.target.value);
  }

  requiredValidation(value, valid = true) {
    let  message = "";
    if (this.props.required && !value) {
      message = this.props.emptyMessage;
      valid = false;
    }
    this.setState({
      data: value,
      valid: valid,
      message: message
    });
  }
  textValidation (value, valid = true) {
    let  message = "";
    if (!valid) {
      message = this.props.errorMessage;
      valid = false;
    } else if (value.length < this.props.minLength ) {
      message = this.props.errorMessage;
      valid = false;
    } else if (value.length > this.props.maxLength) {
      message = this.props.errorMessage;
      valid = false;
    }
  this.setState({
    data: value,
    valid: valid,
    message: message
  });
}

  render() {
    const {
      maxLength,
      required,
      readOnly,
      placeholder,
      disable
    } = this.props;
    let errorMessage = this.state.message;
    return (
      <FormField hasError={this.state.valid}>
        <Label>{this.props.label}</Label>
        <TextInput maxLength={maxLength}
          required={required}
          readOnly={readOnly}
          disable={disable}
          onChange={(e)=>this.onChangeHandler(e)}
          onBlur={(e)=>this.onBlurHandler(e)}
          placeholder={placeholder}
          value={this.state.data}
          />
        <Error>{errorMessage}</Error>
      </FormField>
    );
  }
}

export default TextField;
