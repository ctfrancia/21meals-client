import React from 'react';
import './css/index.css';
import RecipeName from './recipe-name';
import RecipeIngridientInput from './recipe-ingridient';
import QuantityInput from './quantity-input';
import RecipeDescription from './recipe-description';
import RecipeReview from './recipe-review';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/index.css';
class RecipeForm extends React.Component {


  render () {
    return (
      <div className="form__wrapper">
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
          <RecipeName name={this.props.recipe.name} changeName={this.props.changeName}/>
          <RecipeIngridientInput name={this.props.recipe.name} ingredientList={this.props.ingredientList} addIngredient={this.props.addIngredient} removeIngredient={this.props.removeIngredient}/>
          <QuantityInput measures={this.props.measures} name={this.props.recipe.name} ingredientList={this.props.ingredientList} changeIngredientAmount={this.props.changeIngredientAmount}/>
          <RecipeDescription name={this.props.recipe.name} descriptionList={this.props.descriptionList} addStep={this.props.addStep} removeStep={this.props.removeStep}/>
          <RecipeReview recipe={this.props.recipe} submitRecipe={this.props.submitRecipe}/>
        </Carousel>
      </div>
    );
  }
}

export default RecipeForm;
