import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar'
import Button from './components/Button'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
     <div className="App">
      <Bar />
      <Form />
      <Button />
      </div>
    );
  }
}

export default App;
