import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import 'antd/lib/date-picker/style/css'; // for css
import { ShoppingList } from '../ShoppingList';
import Planning from '../Planning';
import Main from '../Main/Main';
import PropTypes from 'prop-types';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllIngredients } from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllPlans } from '../../actions/plans.actions';

class App extends Component {
  componentDidMount() {
    this.props.getAllRecipes();
    this.props.getAllIngredients();
    this.props.getAllPlans();
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
  getAllIngredients: PropTypes.func,
  getAllRecipes: PropTypes.func,
  getAllPlans: PropTypes.func,
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getAllIngredients: () => dispatch(getAllIngredients()),
  getAllRecipes: () => dispatch(getAllRecipes()),
  getAllPlans: () => dispatch(getAllPlans()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
