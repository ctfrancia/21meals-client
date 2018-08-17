
import newRecipe from './recipe-input.reducer';
import slider from './carousel.reducer';
import { combineReducers } from 'redux';
import entities from './entities.reducer'
import pages from './pages.reducer';

const reducers = combineReducers({
  newRecipe,
  slider,
  entities,
  pages,
  
});

export default reducers;
