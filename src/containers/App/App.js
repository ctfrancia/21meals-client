import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import 'antd/lib/date-picker/style/css'; // for css
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Main from '../Main/Main';
import PropTypes from 'prop-types';
import { PrivateRoute } from '../../helpers/PrivateRoute';
import { Router, Route } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';
import { history } from '../../helpers/history';

class App extends Component {
  constructor(props) {
    super(props);
    history.listen ((location, action) => {
    });
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/main" component={Main} />
            <PrivateRoute path="/planning" component={Planning} />
            <PrivateRoute path="/list" component={ShoppingList} />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
