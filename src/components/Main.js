import React from 'react'
import { Switch, Route } from 'react-router-dom'
import History from './History'
import App from '../App.js'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/History' component={History} />

        </Switch>
    </main>
)

export default Main;