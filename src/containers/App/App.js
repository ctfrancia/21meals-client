import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import "antd/lib/date-picker/style/css"; // for css
import { ShoppingList } from "../ShoppingList";
import Planning from "../Planning";
import Main from "../Main/Main";
import PropTypes from "prop-types";
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getAll } from "../../actions/ingredients.actions";

class App extends Component {
  componentDidMount() {
  }

  render() {
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
  getAllIngredients: PropTypes.func
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getAllIngredients: dispatch(getAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
