import React from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { NotFound } from './components/404';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter>
    <Link to="/about">About</Link>
            <Link to="/abouasdasdast">About</Link>
            <Link to="/">Home</Link>
      <Switch>
      <Route path="/" exact>
           <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        
        <Route component={NotFound} path={"*"} exact />
      </Switch> 
    </BrowserRouter> 
  );
}

export { App };
