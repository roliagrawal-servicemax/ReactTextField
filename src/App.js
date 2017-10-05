import React, { Component } from 'react';
import './App.css';
import TextField from './components/TextField'
class App extends Component {
  render() {
    return (
      <div>
      <TextField label="Hello I am textbox"
      errorMessage="textbox is invalid"
      maxLength="5"
      required="true"
      emptyMessage="textbox is empty"/>
      <TextField label="Hello I am readOnly textbox"
      placeholder="be Happy"
      readOnly/>
      </div>
    );
  }
}

export default App;
