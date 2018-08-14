import React from 'react';
import './css/index.css';
import SelectedIngredients from './selected-ingredients';

class QuantityInput extends React.Component {

  renderListIteams = () => {
      return this.props.measures.map((measure, i) => (<option
        key={i}
        value={measure}>{measure}
        </option> ));
  };

  render () {
    return (
      <div className="name__field">
        <p>Lets select the quantities</p>
        <p>{this.props.name}</p>
        <SelectedIngredients ingredientList={this.props.ingredientList} removeIngredient={this.props.removeIngredient}/>

        <form onSubmit={this.props.changeIngredientAmount}>
          <input className="text__input" name="recipeName" type="text" />
          <select id="title" name="quantity" defaultValue="gramms">
            {this.renderListIteams()}
          </select>
          <input type="submit" name="Add"/>
        </form>

      </div>
    );
  }
}

export default QuantityInput;
