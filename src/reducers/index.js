import { combineReducers } from 'redux';
import entities from './entities.reducer'
import pages from './pages.reducer';

const reducers = combineReducers({
  entities,
  pages,
  
});

export default reducers;
