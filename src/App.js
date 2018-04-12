import React, { Component } from 'react';
import './App.css';
import Bar from './components/AppBar.js';
import Form from './components/Form.js';
import Button from './components/Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar />
        <Form />
        {/*<Button />*/}
      </div>
    );
  }
}

export default App;
