import React, { Component } from 'react';
import './App.css';
import Bar from './components/AppBar.js';
import Form from './components/Form.js';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Bar />
        <Form />
        {/*<Button />*/}
      </div>
    );
  }
}

export default App;
