import React from 'react';
import './css/index.css';
import SelectedIngredients from './selected-ingredients';
import ListOfInstructions from './instructions-list';
import { Card } from 'antd';
class RecipeReview extends React.Component {
  renderListIteams = () => {
    return this.props.recipe.ingredients.map((ingredient, i) => (<div
      key={i}
      onClick={ingredient => this.props.removeIngredient(i)}
      className="ingredient__field">
      <img className="ingredient__image" alt="example" src="http://www.nataliewitcher.com/wp-content/uploads/2012/11/Red-Apple.jpg" />
      <p>{ingredient}</p> </div> ));
  };

  renderList2Iteams = () => {
    return this.props.recipe.description.map((description, i) => (<li key={i} onClick={description => this.props.removeStep(i)}>{description}</li>));
  };

  render () {

    return (
      <div className="name__field">
        <p>Is everything right?</p>
        <p>{this.props.recipe.name}</p>
        <div>{this.renderListIteams()}</div>
        <ol>{this.renderList2Iteams()}</ol>
        <button onClick={this.props.submitRecipe}>All Perfect</button>
      </div>
    );
  }
}

export default RecipeReview;
