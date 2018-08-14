import { combineReducers } from 'redux';

import recipes from './recipes.reducer';
import ingredients from './ingredients.reducer';
import plans from './plans.reducer';

const reducers = combineReducers({
  recipes,
  plans,
  ingredients,
  
});

export default reducers;
