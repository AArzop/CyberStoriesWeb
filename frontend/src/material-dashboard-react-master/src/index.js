import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

// core components
import Admin from 'material-dashboard-react-master/src/layouts/Admin.js'

import 'material-dashboard-react-master/src/assets/css/material-dashboard-react.css?v=1.8.0'

const hist = createBrowserHistory()

export const DashboardPage = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Admin}/>
    </Switch>
  </Router>
)
