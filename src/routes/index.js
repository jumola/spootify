import React from 'react';
import Discover from './Discover';
import { Route, Switch, Redirect } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      {[
        {
          path: '/',
          name: 'Discover',
          Component: Discover,
        },
      ].map(({ path, name, Component }) => {
        return (
          <Route key={path} path={path} exact={true}>
            <Component />
          </Route>
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
}
