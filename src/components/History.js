import React, { Component } from 'react';
import AppBar from './AppBar.js';
import Form from './Form.js';

class History extends Component {
  render() {
    return (
      <div className="App">
        <h1>HISTORY</h1>
        <AppBar />
        <Form />
        {/*<Button />*/}
      </div>
    );
  }
}

export default History;
