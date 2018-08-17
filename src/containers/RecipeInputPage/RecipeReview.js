import React from 'react';
import './css/index.css';
import { connect } from 'react-redux';
import SelectedIngredients from './SelectedIngredients';
import ListOfInstructions from './ListOfInstructions';
import { Input } from 'antd';

class RecipeReview extends React.Component {

  render () {
    return (
      <div className="name__field">
        <div className="input__header">
          <p className="instruction__text">Is everything right?</p>
        </div>
        <div>
          <h3 className="recepe__review__name">{this.props.newRecipe.name}</h3>
        </div>
        <div className="form__content">
          <div className="image__placeholder">
            <img className="recipe__image" alt="example" src="https://static.planetminecraft.com/files/resource_media/screenshot/1814/screenshot-272-1522741691_lrg.png" />
          </div>
          <h3 className="recipe__review__text">Your ingredients: </h3>
          <SelectedIngredients className="ingredient__selector" ingredientList={this.props.newRecipe.ingredients} />
          <h3 className="recipe__review__text">Your instructions: </h3>
          <ListOfInstructions className="ListOfInstructions" active={-1} descriptionList={this.props.newRecipe.description}/>
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

const mapStateToProps = (state) => ({
  newRecipe: state.newRecipe,
});

export default connect(mapStateToProps)(RecipeReview);
