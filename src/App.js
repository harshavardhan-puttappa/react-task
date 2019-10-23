import React, { Fragment } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/layouts/Navbar";
import About from "./components/layouts/About";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
