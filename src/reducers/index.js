import { combineReducers } from 'redux';
import entities from './entities.reducer'
import recipes from './recipes.reducer';
import ingredients from './ingredients.reducer';
import plans from './plans.reducer';

const reducers = combineReducers({
  entities,
  pages: ingredients,
  recipes,
  plans,
  
});

export default reducers;
