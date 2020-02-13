import React, { Component, Fragment } from 'react';
import { Header, Home, About, Contact } from './views'
import './assets/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component{
  render() {
    return (
      <div className="App">
        <Fragment>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Router>
        </Fragment>
      </div>
    );
  }
};
