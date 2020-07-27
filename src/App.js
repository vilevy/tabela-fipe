import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "../src/config/routes";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => (
              <Route key={route.key} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
