import React from 'react';
import './css/index.css';
import SelectedIngredients from './selected-ingredients';

class QuantityInput extends React.Component {
  render () {
    return (
      <div className="name__field">
        <p>Lets select the quantities</p>
        <p>{this.props.name}</p>
        <SelectedIngredients ingredientList={this.props.ingredientList} removeIngredient={this.props.removeIngredient}/>
        <input className="text__input" name="recipeName" type="text" />
        <button>Add</button>
      </div>
    );
  }
}

export default QuantityInput;
