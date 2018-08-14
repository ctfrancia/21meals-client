import React from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/css';
import './css/index.css';

const { Meta } = Card;
class SelectedIngredients extends React.Component {

  renderListIteams = () => {
      return this.props.ingredientList.map((ingredient, i) => (<div
        key={i}
        onClick={ingredient => this.props.removeIngredient(i)}
        className="ingredient__field">
        <img className="ingredient__image" alt="example" src="http://www.nataliewitcher.com/wp-content/uploads/2012/11/Red-Apple.jpg" />
        <p>{ingredient}</p> </div>
       ));
  };


  render () {
    console.log(this.props);
    return (
      <div className="selected-ingredients">
        {this.renderListIteams()}
      </div>
    );
  }
}

export default SelectedIngredients;
