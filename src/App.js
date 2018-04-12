import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar.js';
import Form from './components/Form.js';
import Button from './components/Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Form />
        {/*<Button />*/}
      </div>
    );
  }
}

export default App;
