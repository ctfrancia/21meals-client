import React from 'react';
import { Button } from 'antd';

function RecipeInputSummary(props) {
  return (
    <div>
      <div className="recipe__header">
        <div className="recipe__header--image">
          <div className="recipe__header--title">
            {!props.title ? <h2>Untitled Recipe</h2> : <h2>{props.title}</h2>}
          </div>
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
          {!props.instructions ? (
            <p>
              <i>There is still no description for this recipe. Please add one</i>
            </p>
          ) : (
            <p>
              <i>{props.instructions}</i>
            </p>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default RecipeInputSummary;
