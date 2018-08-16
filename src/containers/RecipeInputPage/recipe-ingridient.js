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
        <div className="input__header">
          <p className="instruction__text" >Lets add some ingridients</p>
        </div>
        <div className="form__content">
          <SelectedIngredients className="ingredient__selector" ingredientList={this.props.newRecipe.ingredients} removeIngredient={this.props.removeIngredient}/>
        </div>
        <div className="user__input">
          <form className="input__form" onSubmit={this.submitForm}>
            <Input className="text__input" name="ingredient" type="text" required/>
            <Input className="button__add__ready" type="submit" name="Add"/>
          </form>
        </div>
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
