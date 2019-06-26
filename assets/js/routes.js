import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './data/reduxStore';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404NotFound';

export const routes = (
  <Provider store={configureStore()}>
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='*' exact={true} component={NotFound} />
  </Switch>
  </Provider>
);