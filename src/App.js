import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NotFound } from "./components/404";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about/:id" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound}  />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
