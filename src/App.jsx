import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { MainContainer } from './container';
import { Header } from './components/Default';
import GlobalStyle from './styles/gloobalStlye';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" render={() => <MainContainer />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
