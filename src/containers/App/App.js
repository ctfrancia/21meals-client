import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import { connect } from 'react-redux';
import  {getChuck}  from '../../actions/mocks.actions';
import DatePicker from 'antd/lib/date-picker';  // for js
import 'antd/lib/date-picker/style/css';        // for css
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {

  componentDidMount() {
    this.props.getQuote();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.quote}
        </p>
      <DatePicker />
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  quote : state.mock.quote

});

const mapDispatchToProps = (dispatch) => ({
  getQuote: () => dispatch(getChuck())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
