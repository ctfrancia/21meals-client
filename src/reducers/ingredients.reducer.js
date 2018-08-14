import { ingredientsConstants } from '../constants/ingredients.constants';

const defaultState = { ingredients: [], loading: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case ingredientsConstants.INGREDIENTS_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ingredientsConstants.INGREDIENTS_GET_ALL_SUCCESS:
      return {
        state,
        loading: false
      };

    default:
      return state;
  }
};
