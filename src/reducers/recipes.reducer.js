import { recipesConstants } from '../constants/recipes.constants';
const defaultState = { loadingRecipes: true, recipesIndex: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case recipesConstants.RECIPES_GET_ALL_REQUEST:
      return {
        ...state,
        loadingRecipes: true
      };
      
      case recipesConstants.RECIPES_GET_ALL_SUCCESS:
      return {
        recipesIndex: action.data,
        loadingRecipes: false
      };

    default:
      return state;
  }
};
