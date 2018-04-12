import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import  Main  from './components/Main';
import  History  from './components/History';
import  Principal  from './components/Principal';



class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={Principal}/>
            <Route path='/Main' component={Main}/>
            <Route path='/History' component={History}/>
          
          </Switch>
        </main>
      </Router>
      
    );
  }
}

export default App;
