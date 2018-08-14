import React from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/css';
import './css/index.css';

const { Meta } = Card;
class SelectedIngredients extends React.Component {

  renderListIteams = () => {
      return this.props.ingredientList.map((ingredient, i) => (<Card
        key={i}
        onClick={ingredient => this.props.removeIngredient(i)}
        style={{ height: 100 }}
        cover={
          <img alt="example" style={{ height: 75}} style={{ width: 75}} src="http://www.nataliewitcher.com/wp-content/uploads/2012/11/Red-Apple.jpg" />}>
          <p>{ingredient}</p>
        </Card> ));
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
