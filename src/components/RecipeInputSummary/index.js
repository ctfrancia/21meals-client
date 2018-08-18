import React from 'react';
import {  Button } from 'antd';


function RecipeInputSummary () {
  return (
    <div>
      <div className="recipe__header">
        <div className="recipe__header--title">
          <h2>Fried Potatoes</h2>
        </div>
      </div>
      <div className="recipe__body">
        <div className="recipe__body--ingredients">
          <ul>
            <li>200 grams Potatoes</li>
            <li>2 gr Salt</li>
            <li>20 ml Oil</li>
          </ul>
        </div>
        <div className="recipe__body--instructions">
          <p>
            Cut the potatoes in your prefered cut while you heathen the oil on a
            Pan. Once the oil is hot, fry the potatoes for five minutes or until
            golden. Remove from oil and dry on some paper. Add salt and eat.
          </p>
        </div>
        <div className="recipe__body--confirm">
          <Button type="primary">Spot on, baby boy</Button>
        </div>
      </div>
    </div>
  );
}

export default RecipeInputSummary;
