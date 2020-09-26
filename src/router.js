import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage'
import Dash from './pages/DashBoard'

const Router = () => {
    return ( 
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dash} />
                <Route component={<div>404</div>} />
            </Switch>
        </HashRouter> );
}
 
export default Router;