import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import 'antd/lib/date-picker/style/css';        // for css
import { ShoppingList } from '../ShoppingList';
import Planning from '../Planning'
import Main from '../Main/Main';
import PropTypes from 'prop-types';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'




class App extends Component {

  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <TopBar />
            <Route exact path="/" component={Main} />
            <Route path="/planning" component={Planning} />
            <Route path="/list" component={ShoppingList} />
            <BottomBar />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  getQuote: PropTypes.func,
};
const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
