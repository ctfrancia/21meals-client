import { combineReducers } from 'redux';
import entities from './entities.reducer'
import pages from './pages.reducer';
import authentication from './authentication.reducers';

const reducers = combineReducers({
  authentication,
  entities,
  pages,
  
});

export default reducers;
