import React from 'react';
import './css/index.css';
import SelectedIngredients from './selected-ingredients';
import ListOfInstructions from './instructions-list';
import { Card } from 'antd';
class RecipeReview extends React.Component {
  renderListIteams = () => {
    return this.props.recipe.ingredients.map((ingredient, i) => (<Card
      key={i}
      onClick={ingredient => this.props.removeIngredient(i)}
      style={{ height: 100 }}
      cover={
        <img alt="example" style={{ height: 75}} style={{ width: 75}} src="http://www.nataliewitcher.com/wp-content/uploads/2012/11/Red-Apple.jpg" />}>
      <p>{ingredient}</p>
    </Card> ));
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
        <button>All Perfect</button>
      </div>
    );
  }
}

export default RecipeReview;
