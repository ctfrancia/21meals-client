import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin, notification, Divider } from 'antd';
import RecipeCard from '../../components/RecipeCard';
import './Recipes.css';
import RecipeInput from '../RecipeInput/RecipeInput';
import {
  getAllIngredients,
  getAllTypes
} from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllMeasures } from '../../actions/measures.actions';


class Recipes extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
    this.props.getAllIngredients();
    this.props.getAllMeasures();
    this.props.getAllIngredientTypes();
  }

  openNotification = () => {
    notification.open({
      bottom: 300,
      placement: 'bottomRight',
      duration: 10,
      message: 'Welcome to Mealee!',
      description:
        "Hello there! This is your recipies view. Here you will see a list of every recipe that you store. To add new recipes click on the ' Add new ' button "
    });
  };
  componentDidUpdate = prevProps => {
    if (this.props.showNotification && !prevProps.showNotification) {
      this.openNotification();
    }
  };

  renderCards() {
    if (this.props.loading) {
      return (
        <div className="cards loading">
          <Spin size="large" />
        </div>
      );
    } else if (this.props.recipes.length === 0) {
      return (
        <div className="cards">
          <RecipeInput />
        </div>
      );
    } else {
      return (
        <div className="cards">
          <div className="cards__addNew">
            <RecipeInput />
          </div>
          {this.props.recipes.map((el, i) => (
            <RecipeCard key={i} imageUrl={el.photo} name={el.title} id={el.id}/>
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <div className="recipes__view">
        <div className="list__title">
          <h2>My Recipes</h2>
        </div>
        <Divider />
          {this.renderCards()}
      </div>
    );
  }
}

Recipes.propTypes = {
  recipes: PropTypes.array,
  loading: PropTypes.bool,
  getAllIngredients: PropTypes.func,
  getAllRecipes: PropTypes.func,
  getAllMeasures: PropTypes.func,
  getAllIngredientTypes: PropTypes.func,
  getAllPlans: PropTypes.func,
  showNotification: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el]),
  measures: state.entities.measures,
  ingredients_types: state.entities.ingredients_types,
  planId: state.authentication.user.plan_id,
  showNotification: state.pages.showNotification
});

const mapDispatchToProps = dispatch => ({
  getAllIngredients: () => dispatch(getAllIngredients()),
  getAllRecipes: () => dispatch(getAllRecipes()),

  getAllMeasures: () => dispatch(getAllMeasures()),
  getAllIngredientTypes: () => dispatch(getAllTypes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
