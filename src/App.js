import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Theme, GlobalStyle } from './theme';

import Home from './views/Home';
import Details from './views/Details';
import Categories from './views/Categories';

import ScrollTop from './components/ScrollTop';

const App = () => (
  <ThemeProvider theme={Theme}>
    <>
      <BrowserRouter>
        <Switch>
          <ScrollTop>
            <Route path="/" exact={true} component={Home} />
            <Route path="/tours/:id" component={Details} />
            <Route path="/categories/:id" component={Categories} />
          </ScrollTop>
        </Switch>
      </ BrowserRouter>
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default App;
