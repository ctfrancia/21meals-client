import React from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/css';
import './css/index.css';

const { Meta } = Card;
class SelectedIngredients extends React.Component {

  handleClick = (index) => {
    if(this.props.onClick) {
      this.props.onClick(index);
    }
  }

  renderListIteams = () => {
      return this.props.ingredientList.map((ingredient, i) => (
        <div
          key={i}
          onClick={ingredient => this.handleClick(i)}
          className="ingredient__field"
          style={{ background: this.props.active != i ? 'rgb(230, 154, 118)' : 'rgb(208, 227, 124)' }}>
            <img className="ingredient__image" alt="example" src="http://www.pngall.com/wp-content/uploads/2016/05/Orange-PNG-Clipart.png" />
            <p className="ingredient__description">{ingredient.name}</p>
        </div>
      ));
  };

  render () {
    return (
      <div className="selected-ingredients">
        {this.renderListIteams()}
      </div>
    );
  }
}

export default SelectedIngredients;
