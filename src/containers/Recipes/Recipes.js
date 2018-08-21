import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Spin, notification } from 'antd';
import RecipeCard from '../../components/RecipeCard';
import './Recipes.css';
import RecipeInput from '../RecipeInput/RecipeInput';
import {
  getAllIngredients,
  getAllTypes
} from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllMeasures } from '../../actions/measures.actions';

const { Content } = Layout;

class Recipes extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
    this.props.getAllIngredients();
    this.props.getAllMeasures();
    this.props.getAllIngredientTypes();
  }

  openNotification = () => {
    notification.open({
      message: 'Welcome to Mealee!',
      description:
        "Hello there! This is your recipies view. Here you will see a list of every recipe that you store. To add new recipes click on the ' Add new ' button "
    });
  };

  renderCards() {
    if (this.props.loading) {
      return (
        <div className="cards loading">
          <Spin size="large" />
        </div>
      );
    } else if (this.props.recipes.length === 0) {
      return <div className="cards">
          <RecipeInput />
          {/* {this.openNotification()} */}
        </div>;
    } else {
      return (
        <div className="cards">
          <RecipeInput />
          {this.props.recipes.map((el, i) => (
            <RecipeCard key={i} imageUrl={el.photo} name={el.title} />
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Layout>
          <Content>{this.renderCards()}</Content>
        </Layout>
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
  getAllPlans: PropTypes.func
};

const mapStateToProps = state => ({
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el]),
  planId: state.authentication.user.plan_id
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
