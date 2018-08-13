import { combineReducers } from 'redux';

import recipes from './recipes.reducer';
import plans from './plans.reducer';

const reducers = combineReducers({
  recipes,
  plans
  
});

export default reducers;
