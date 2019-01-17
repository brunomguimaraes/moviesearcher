import React from 'react'
import { Route, Redirect, Switch} from 'react-router-dom'

import App from '/App'
import Details from '/Details'


export default props =>(
    <Switch>
        
        <Route path='/App' component={App} />
        <Route path='/details' component={Details} />
        <Redirect from='*' to='/App' />
    </Switch>
)