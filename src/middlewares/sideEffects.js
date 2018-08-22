import { plansConstants } from '../constants/plans.constants';
import { getAllShoppingList } from '../actions/shoppingList.actions';

export default store => next => action => {
  switch (action.type) {
    case plansConstants.CHANGE_MEAL_SUCCESS:
      store.dispatch(getAllShoppingList());
      break;
    default:
      next(action);
  }
  next(action);
};
