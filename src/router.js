import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage'
import Dash from './pages/DashBoard'

const RouterComp = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dash} />
                <Route component={<div>404</div>} />
            </Switch>
        </Router> );
}
 
export default RouterComp;