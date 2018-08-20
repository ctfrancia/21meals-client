import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Spin, notification, Button } from 'antd';
import RecipeCard from '../../components/RecipeCard';
import './Main.css';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import RecipeInput from '../RecipeInput/RecipeInput';
import {
  getAllIngredients,
  getAllTypes
} from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllPlans } from '../../actions/plans.actions';
import { getAllMeasures } from '../../actions/measures.actions';

const { Content } = Layout;

class Main extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
    this.props.getAllIngredients();
    this.props.getAllPlans();
    this.props.getAllMeasures();
    this.props.getAllIngredientTypes();
    if (this.props.recipes.length === 0) this.openNotification()
  }

  openNotification = () => {
    notification.open({
      message: 'Welcome to Mealee!',
      description:
        'Hello there! This is your recipies view. Here you will see a list of every recipe that you store. To add new recipes click on the \' Add new \' button '
    })
  };

  renderCards() {
    if (this.props.loading) {
      return (
        <div className="cards loading">
          <Spin size="large" />
        </div>
      );
    } else {
      return (
        <div className="cards">
          {}
          <RecipeInput />
          {this.props.recipes.map((el, i) => (
            <RecipeCard
              key={i}
              handleClick={this.showModal}
              imageUrl={el.photo}
              name={el.title}
              serves={el.serves}
            />
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <TopBar section="My Recipes" />
        <Layout>
          <Content>
          {this.renderCards()}
          </Content>
        </Layout>
        <BottomBar />
      </div>
    );
  }
}

Main.propTypes = {
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
)(Main);
