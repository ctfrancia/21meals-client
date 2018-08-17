import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { changeName, addIngredient, removeIngredient, changeIngredientAmount, changeFormDisplay, addStep, removeStep } from '../../actions/recipe-input.actions';
import RecipeForm from './RecipeForm';
import './css/index.css';
import 'antd/lib/input/style/css';

/* eslint-disable react/prefer-stateless-function */
export class RecipeInputPage extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      measures: ['gramms', 'killos', 'litters', 'tbsp', 'tsp', 'mg']
    };
  }

  submitRecipe (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className="recipe__form">
        <Helmet>
          <title>New Recipe</title>
          <meta name="description" content="Description of RecipeInputPage" />
        </Helmet>
        <div className="header"> </div>
        <div className="main__field">
          <RecipeForm
            submitRecipe={event => this.submitRecipe(event)}
            measures={this.state.measures}
          />
        </div>
        <div className="navigation__buttons"> </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newRecipe: state.newRecipe,
});

export default connect(mapStateToProps)(RecipeInputPage);
