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
import {
  getAllIngredients,
  getAllTypes
} from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllPlans } from '../../actions/plans.actions';
import { getAllMeasures } from '../../actions/measures.actions';
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
    this.props.getAllRecipes();
    this.props.getAllIngredients();
    this.props.getAllPlans();
    this.props.getAllMeasures();
    this.props.getAllIngredientTypes();
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

App.propTypes = {
  getAllIngredients: PropTypes.func,
  getAllRecipes: PropTypes.func,
  getAllMeasures: PropTypes.func,
  getAllIngredientTypes: PropTypes.func,
  getAllPlans: PropTypes.func
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getAllIngredients: () => dispatch(getAllIngredients()),
  getAllRecipes: () => dispatch(getAllRecipes()),
  getAllPlans: () => dispatch(getAllPlans()),
  getAllMeasures: () => dispatch(getAllMeasures()),
  getAllIngredientTypes: () => dispatch(getAllTypes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
