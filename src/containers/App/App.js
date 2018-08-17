import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import 'antd/lib/date-picker/style/css'; // for css
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Main from '../Main/Main';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllIngredients } from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllPlans } from '../../actions/plans.actions';
import Login from '../Login';
import { RecipeInputPage } from '../RecipeInputPage';

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
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Main} />
            <Route path="/planning" component={Planning} />
            <Route path="/recipeform" component={RecipeInputPage} />
            <Route path="/list" component={ShoppingList} />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  getAllIngredients: PropTypes.func,
  getAllRecipes: PropTypes.func,
  getAllPlans: PropTypes.func
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getAllIngredients: () => dispatch(getAllIngredients()),
  getAllRecipes: () => dispatch(getAllRecipes()),
  getAllPlans: () => dispatch(getAllPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
