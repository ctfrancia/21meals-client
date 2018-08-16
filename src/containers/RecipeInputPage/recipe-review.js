import React from 'react';
import './css/index.css';
import { connect } from 'react-redux';
import SelectedIngredients from './selected-ingredients';
import ListOfInstructions from './instructions-list';
import { Input } from 'antd';

class RecipeReview extends React.Component {
  doNothing = () => {

  }

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
          <SelectedIngredients className="ingredient__selector" ingredientList={this.props.recipe.ingredients} onClick={this.doNothing}/>
          <ListOfInstructions className="ListOfInstructions" active={-1} onClick={this.doNothing} descriptionList={this.props.recipe.description}/>
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

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReview);
