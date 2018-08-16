import React from 'react';
import './css/index.css';
import SelectedIngredients from './selected-ingredients';
import ListOfInstructions from './instructions-list';
import { Input } from 'antd';
class RecipeReview extends React.Component {
  // renderListIteams = () => {
  //   return this.props.recipe.ingredients.map((ingredient, i) => (<div
  //     key={i}
  //     onClick={ingredient => this.props.removeIngredient(i)}
  //     className="ingredient__field">
  //     <img className="ingredient__image" alt="example" src="http://www.nataliewitcher.com/wp-content/uploads/2012/11/Red-Apple.jpg" />
  //     <p>{ingredient.name}</p> </div> ));
  // };

  renderList2Iteams = () => {
    return this.props.recipe.description.map((description, i) => (<li key={i} onClick={description => this.props.removeStep(i)}>{description}</li>));
  };

  render () {

    return (
      <div className="name__field">
        <div className="input__header">
          <p className="instruction__text">Is everything right?</p>
          <p>{this.props.recipe.name}</p>
        </div>
        <div className="form__content">
          {/* <div>{this.renderListIteams()}</div> */}
          <SelectedIngredients className="ingredient__selector" ingredientList={this.props.recipe.ingredients} removeIngredient={this.props.removeIngredient}/>
          <ListOfInstructions className="ListOfInstructions" removeStep={this.props.removeStep} descriptionList={this.props.recipe.description}/>
          <ol className="ready__instructions">{this.renderList2Iteams()}</ol>
        </div>
        <div className="user__input">
          <form className="input__form" onSubmit={this.props.submitRecipe}>
            <Input type="submit" className="button__add__ready" value="All Perfect" />
          </form>
        </div>
      </div>
    );
  }
}

export default RecipeReview;
