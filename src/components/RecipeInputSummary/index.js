import React from 'react';
import { connect } from 'react-redux';

class RecipeInputSummary extends React.Component {
  componentDidMount() {
    console.log(this.props);

  } 
  render() {
    return (
      <div>
        <div className="recipe__header">
          <div className="recipe__header--image">
            <div className="recipe__header--title">
              {!this.props.data.title ? (
                <h2>Untitled Recipe</h2>
              ) : (
                <h2>{this.props.data.title}</h2>
              )}
            </div>
          </div>
        </div>
        <div className="recipe__body">
          <div className="recipe__body--ingredients">
            <ul>
              <li>321hb¡ 321 321 </li>
              <li>321hb¡ 321 321 </li>
              <li>321hb¡ 321 321 </li>
              <li>321hb¡ 321 321 </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ingredients: state.entities.allIngredients,
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el]),
  measures: state.entities.measures,
  ingredientTypes: state.entities.ingredient_types
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(RecipeInputSummary)
