import { combineReducers } from 'redux';
import newRecipe from './recipe-input.reducer';
import mock from './mock.reducer';
import slider from './carousel.reducer';

const reducers = combineReducers({
  mock,
  newRecipe,
  slider,
});

export default reducers;
