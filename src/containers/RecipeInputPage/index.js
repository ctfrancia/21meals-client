import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { changeName, addIngredient, removeIngredient, changeIngredientAmount, changeFormDisplay, addStep, removeStep } from '../../actions/recipe-input.actions';
import RecipeForm from './recipe-form';
import './css/index.css';

/* eslint-disable react/prefer-stateless-function */
export class RecipeInputPage extends React.Component {

  constructor (props) {
    console.log('wtf');
    super(props);
    this.state = {
      measures: ['gramms', 'killos', 'litters', 'spoons', 'squirrels', 'bacteria']
    };
  }

  addStep (event) {
    event.preventDefault();
    this.props.addStep(event.target.instruction.value);
    event.target.instruction.value = '';
  }

  removeStep (index) {
    this.props.removeStep(index);
  }

  addIngredient (event) {
    event.preventDefault();
    console.log(event.target);
    this.props.addIngredient(event.target.ingredient.value);
    event.target.ingredient.value = '';
  }

  removeIngredient (index) {
    this.props.removeIngredient(index);
  }

  changeName (event) {
    event.preventDefault();
    this.props.changeName(event.target.name.value);
    event.target.name.value = '';
  }

  changeIngredientAmount (event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
  }

  submitRecipe () {
    console.log(this.props.recipe);
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
            submitRecipe={this.submitRecipe()}
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
