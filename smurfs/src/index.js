import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SmurfForm from "./components/FormComponent";
import { NavBar } from "./components/NavComponent";
const store = createStore(
  reducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/form" component={SmurfForm} />
        <Route path="/smurf/:id" component={SmurfForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
