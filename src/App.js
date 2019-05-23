import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "../src/config/routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
