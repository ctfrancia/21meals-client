import { plansConstants } from '../constants/plans.constants';
import { ingredientsConstants } from '../constants/ingredients.constants';
import { recipesConstants } from '../constants/recipes.constants';
import { getAllShoppingList } from '../actions/shoppingList.actions';
import { message } from 'antd';

export default store => next => action => {
  switch (action.type) {
    case plansConstants.CHANGE_MEAL_SUCCESS:
      store.dispatch(getAllShoppingList());
      break;
    case recipesConstants.RECIPES_POST_NEW_SUCCESS:
      message.success('New Recipe added!');
      break;
    case recipesConstants.RECIPES_POST_NEW_FAILURE:
      message.error('Oh no! Something went wrong!');
      break;
    case ingredientsConstants.INGREDIENTS_POST_NEW_SUCCESS:
      message.success('You can now use your new ingredient!');
      break;
    case recipesConstants.INGREDIENTS_POST_NEW_FAILURE:
      message.error('Oh no! Something went wrong!');
      break;
    default:
      next(action);
  }
  next(action);
};
