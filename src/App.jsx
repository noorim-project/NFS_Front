import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Main } from './container';
import GlobalStyle from './styles/gloobalStlye';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={() => <Main />} exact />
    </Switch>
  </BrowserRouter>
);

export default hot(App);
