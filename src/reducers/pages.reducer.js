import { ingredientsConstants } from '../constants/ingredients.constants';
import { plansConstants } from '../constants/plans.constants';
import { recipesConstants } from '../constants/recipes.constants';
import { listConstants } from '../constants/list.constants';

const defaultState = {
  recipesIndex: [],
  loadingIngredients: true,
  loadingPlans: true,
  loadingRecipes: true
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case ingredientsConstants.INGREDIENTS_GET_ALL_REQUEST:
      return {
        ...state,
        loadingIngredients: true
      };

    case ingredientsConstants.INGREDIENTS_GET_ALL_SUCCESS:
      return {
        ...state,
        allIngredientsIndex: action.result,
        loadingIngredients: false
      };

    case plansConstants.PLANS_GET_ALL_REQUEST:
      return {
        ...state,
        loadingPlans: true
      };

    case plansConstants.PLANS_GET_ALL_SUCCESS:
      return {
        ...state,
        loadingPlans: false,
        plansIndex: action.result
      };

    case recipesConstants.RECIPES_GET_ALL_REQUEST:
      return {
        ...state,
        loadingRecipes: true
      };

    case recipesConstants.RECIPES_GET_ALL_SUCCESS:
      return {
        ...state,
        recipesIndex: action.result,
        loadingRecipes: false
      };
    case listConstants.LIST_GENERATE:
      return {
        ...state,
        shoppingList: []
      };

    default:
      return state;
  }
};
