import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,IndexRoute,browserHistory,hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// importing components

import Main from './components/main.js';
import NotFound from './components/errors/not_found';

ReactDOM.render(
<MuiThemeProvider>
  <Router history={browserHistory}>
      <Route path='/' component={Main}>
      <Route path='*' component={NotFound}/>
      </Route>
  </Router>
</MuiThemeProvider>,document.getElementById('app')
);
