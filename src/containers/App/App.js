import React, { Component } from 'react';
import './App.css';
import { PrivateRoute } from '../../helpers/PrivateRoute';
import { Router, Route } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';
import { history } from '../../helpers/history';
import Index from '../Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
