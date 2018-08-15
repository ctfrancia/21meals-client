import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { changeName, addIngredient, removeIngredient, changeIngredientAmount, changeFormDisplay, addStep, removeStep } from '../../actions/recipe-input.actions';
import RecipeForm from './recipe-form';
import './css/index.css';
import 'antd/lib/input/style/css';

/* eslint-disable react/prefer-stateless-function */
export class RecipeInputPage extends React.Component {

  constructor (props) {
    console.log('wtf');
    super(props);
    this.state = {
      measures: ['gramms', 'killos', 'litters', 'spoons', 'squirrels', 'bacteria']
    };
  }

  submitRecipe (event) {
    event.preventDefault();
    console.log(this.props.newRecipe);
  }

  render () {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="main">
        <Helmet>
          <title>New Recipe</title>
          <meta name="description" content="Description of RecipeInputPage" />
        </Helmet>
        <div className="header"> </div>
        <div className="main__field">
          <RecipeForm
            recipe={this.props.newRecipe}
            descriptionList={this.props.newRecipe.description}
            ingredientList={this.props.newRecipe.ingredients}
            addStep={event => this.addStep(event)}
            removeStep={i => this.removeStep(i)}
            addIngredient={event => this.addIngredient(event)}
            removeIngredient={i => this.removeIngredient(i)}
            changeName={event => this.changeName(event)}
            submitRecipe={event => this.submitRecipe(event)}
            changeIngredientAmount={event => this.changeIngredientAmount(event)}
            measures={this.state.measures}
          />
        </div>
        <div className="navigation__buttons"> </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newRecipe: state.newRecipe,
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (name) => {
    dispatch(changeName(name));
  },
  addIngredient: (ingredient) => {
    dispatch(addIngredient(ingredient));
  },
  removeIngredient: (index) => {
    dispatch(removeIngredient(index));
  },
  changeIngredientAmount: (index, amount) => {
    dispatch(changeIngredientAmount(index, amount));
  },
  addStep: (step) => {
    dispatch(addStep(step));
  },
  removeStep: (index) => {
    dispatch(removeStep(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInputPage);
