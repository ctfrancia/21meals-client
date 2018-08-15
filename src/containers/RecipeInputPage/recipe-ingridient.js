import React from 'react';
import SelectedIngredients from './selected-ingredients';
import {removeIngredient, addIngredient } from '../../actions/recipe-input.actions';
import { changeDefaultSlide } from '../../actions/carousel.actions';
import { Input } from 'antd';
import { connect } from 'react-redux';

import './css/index.css';


class RecipeIngridientInput extends React.Component {

  submitForm = (event) => {
    event.preventDefault();
    this.props.addIngredient(event.target.ingredient.value);
    event.target.ingredient.value = '';
    this.props.changeDefaultSlide(1);
  }

  render () {
    return (
      <div className="name__field">
        <p className="instruction__text" >Lets add some ingridients</p>
        <p>{this.props.newRecipe.name}</p>
        <SelectedIngredients className="ingredient__selector" ingredientList={this.props.newRecipe.ingredients} removeIngredient={this.props.removeIngredient}/>
        <form onSubmit={this.submitForm}>
          <Input className="text__input" name="ingredient" type="text" required/>
          <Input type="submit" name="Add"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newRecipe: state.newRecipe,
});

const mapDispatchToProps = (dispatch) => ({
  addIngredient: (ingredient) => {
    dispatch(addIngredient(ingredient));
  },
  removeIngredient: (index) => {
    dispatch(removeIngredient(index));
  },
  changeDefaultSlide: (slide) => {
    dispatch(changeDefaultSlide(slide));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIngridientInput);
