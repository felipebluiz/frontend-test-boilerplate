import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import routes from "./config/routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
