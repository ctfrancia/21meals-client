import { ingredientsConstants } from '../constants/ingredients.constants';
import { plansConstants } from '../constants/plans.constants';
import { recipesConstants } from '../constants/recipes.constants';
import { listConstants } from '../constants/list.constants';
import { message } from 'antd';
import { shoppingListConstants } from '../constants/shoppingList.constants';

const defaultState = {
  recipesIndex: [],
  loadingIngredients: true,
  loadingPlans: true,
  loadingRecipes: true,
  postingRecipe: false,
  postingIngredient: false,
  success: false
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
        success: false,
        postingRecipe: true
      };
    case recipesConstants.RECIPES_POST_NEW_SUCCESS:
      return {
        ...state,
        recipesIndex: [...state.recipesIndex, ...action.result],
        success: true,
        postingRecipe: false
      };
    case recipesConstants.RECIPES_POST_NEW_FAILURE:
      return {
        ...state,
        recipesIndex: [...state.recipesIndex, ...action.result],
        success: false,
        postingRecipe: false
      };
    case ingredientsConstants.INGREDIENTS_POST_NEW_REQUEST:
      return {
        ...state,
        success: false,
        postingIngredient: true
      };
    case ingredientsConstants.INGREDIENTS_POST_NEW_SUCCESS:
      message.success('Your Ingredient was added to the database!');
      return {
        ...state,
        success: true,
        postingIngredient: false
      };
    case recipesConstants.INGREDIENTS_POST_NEW_FAILURE:
      message.error('Oh no! Something went wrong!');
      return {
        ...state,
        success: false,
        postingIngredient: false
      };
    case shoppingListConstants.SHOPPING_LIST_GET_ALL_SUCCESS:
      return {
        ...state,
        shoppingList: action.data.reduce((acc, el) => {
          if (!acc[el.ingredient_type]) acc[el.ingredient_type] = [];
          acc[el.ingredient_type].push(el);
          return acc;
        }, {})
      };
    case shoppingListConstants.CHECK_ITEM_SUCCESS:
      return {
        ...state,
        shoppingList: action.data.reduce((acc, el) => {
          if (!acc[el.ingredient_type]) acc[el.ingredient_type] = [];
          acc[el.ingredient_type].push(el);
          return acc;
        }, {})
      };

    default:
      return state;
  }
};
