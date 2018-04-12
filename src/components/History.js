import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AppBar from './components/AppBar.js';
import Form from './components/Form.js';
import Button from './components/Button.js';
import { Link } from 'react-router-dom'
import { Main } from './components/Main.JS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <h1>HISTORY</h1>
        <AppBar />
        <Form />
        {/*<Button />*/}
        
      </div>
    );
  }
}

export default App;
