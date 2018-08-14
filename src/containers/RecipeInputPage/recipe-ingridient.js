import React from 'react';
import './css/index.css';
import SelectedIngredients from './selected-ingredients';

class RecipeIngridientInput extends React.Component {
  render () {
    return (
      <div className="name__field">
        <p>Lets add some ingridients</p>
        <p>{this.props.name}</p>
        <SelectedIngredients ingredientList={this.props.ingredientList} removeIngredient={this.props.removeIngredient}/>
        <form onSubmit={this.props.addIngredient}>
          <input className="text__input" name="ingredient" type="text" required/>
          <input type="submit" name="Add"/>
        </form>
      </div>
    );
  }
}

export default RecipeIngridientInput;
