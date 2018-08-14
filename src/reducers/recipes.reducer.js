import { recipesConstants } from '../constants/recipes.constants';
const defaultState = { recipes: [], loading: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case recipesConstants.RECIPES_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case recipesConstants.RECIPES_GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
