import React from 'react';
import Link from 'gatsby-link';
import { Route } from 'react-router-dom';
import Details from '../components/Details';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Status from '../components/Status';

export default () => (
  <div>
    <Status />
    <PrivateRoute path="/app/profile" component={Home} />
    <PrivateRoute path="/app/details" component={Details} />
    <Route path="/app/login" component={Login} />
  </div>
);
