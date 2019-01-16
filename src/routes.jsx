import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import App from '/App'
import Details from '/Details'


export default props =>(
    <Router history={hashHistory}>
        
        <Route path='App' component={App} />
        <Route path='Details' component={Details} />
        <Redirect from='*' to='/App' />
    </Router>
)