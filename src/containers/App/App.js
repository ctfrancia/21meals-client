import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import { PrivateRoute } from '../../helpers/PrivateRoute';
import { Router, Route } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';
import { history } from '../../helpers/history';
import Index from '../Mass';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Index} />
    
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {};


export default App;
