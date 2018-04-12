import React from 'react'
import { Switch, Route } from 'react-router-dom'
import History from './History'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/history' component={History}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)