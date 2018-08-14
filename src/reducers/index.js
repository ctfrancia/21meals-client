import { combineReducers } from 'redux';
import newRecipe from './recipe-input.reducer';
import mock from './mock.reducer';


const reducers = combineReducers({
  mock,
  newRecipe,
});

export default reducers;
