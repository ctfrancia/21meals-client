import { ingredientsConstants } from '../constants/ingredients.constants';

const defaultState = { };

export default (state = defaultState, action) => {
  switch (action.type) {
    case ingredientsConstants.INGREDIENTS_GET_ALL_REQUEST:
      return {
        
        loadingIngredients: true
      };

    case ingredientsConstants.INGREDIENTS_GET_ALL_SUCCESS:
      return {
        
        allIngredientsIndex: action.result,
        loadingIngredients: false
      };

    default:
      return state;
  }
};
