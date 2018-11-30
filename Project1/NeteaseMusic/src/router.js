import React from 'react';
import { Router, Route, Switch, NavLink } from 'dva/router';
import IndexPage from './routes/IndexPage';

import config from './router/index';
import RouterView from './router/RouterView';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <React.Fragment>
        <RouterView routes={config.routes}></RouterView>

        <footer>
          <NavLink to="/animation">动漫</NavLink>
          <NavLink to="/music">音乐</NavLink>
          <NavLink to="/dance">舞蹈</NavLink>
        </footer>
      </React.Fragment>
    </Router>
  );
}

export default RouterConfig;
