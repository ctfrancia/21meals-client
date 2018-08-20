import { ingredientsConstants } from '../constants/ingredients.constants';
import { plansConstants } from '../constants/plans.constants';
import { recipesConstants } from '../constants/recipes.constants';
import { listConstants } from '../constants/list.constants';
import { message, Button } from 'antd';

const defaultState = {
  recipesIndex: [],
  loadingIngredients: true,
  loadingPlans: true,
  loadingRecipes: true,
  postingRecipe: false,
  postingIngredient: false,
  success: false,
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
      case recipesConstants.RECIPES_POST_NEW_REQUEST:
      return {
        ...state,
        recipesIndex: [...state.recipesIndex, ...action.result],
        success:  false,
        postingRecipe: true
      };
    case recipesConstants.RECIPES_POST_NEW_SUCCESS:
      return {
        ...state,
        recipesIndex: [...state.recipesIndex, ...action.result],
        success:  true,
        postingRecipe: false
      };
      case recipesConstants.RECIPES_POST_NEW_FAILURE:
      return {
        ...state,
        recipesIndex: [...state.recipesIndex, ...action.result],
        success:  false,
        postingRecipe: false
      };
      case ingredientsConstants.INGREDIENTS_POST_NEW_REQUEST:
      return {
        ...state,
        success:  false,
        postingIngredient: true
      };
    case ingredientsConstants.INGREDIENTS_POST_NEW_SUCCESS:
    message.success('Your Ingredient was added to the database!');
      return {
        ...state,
        success:  true,
        postingIngredient: false
      };
      case recipesConstants.INGREDIENTS_POST_NEW_FAILURE:
      message.error('Oh no! Something went wrong!');
      return {
        ...state,
        success:  false,
        postingIngredient: false
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
