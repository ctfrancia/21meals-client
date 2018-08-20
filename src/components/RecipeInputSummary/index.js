import React from 'react';
import { Button } from 'antd';

function RecipeInputSummary(props) {
  // console.log(props);
  
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
            
          </ul>
        </div>
        
        
      </div>
    </div>
  );
}

export default RecipeInputSummary;
