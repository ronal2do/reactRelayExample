import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Relay from 'react-relay';
import { applyRouterMiddleware, Router, Route, browserHistory } from 'react-router';
import useRelay from 'react-router-relay';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
};

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:5000/' )
);

ReactDOM.render(
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
  >
    <Route
      path="/"
      component={App}
      queries={ViewerQueries}
    >
    </Route>
  </Router>,
  document.getElementById('root')
);
