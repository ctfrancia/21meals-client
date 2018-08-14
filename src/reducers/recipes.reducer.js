import { recipesConstants } from '../constants/recipes.constants';
import { normalize, schema, Schema } from 'normalizr';

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
        recipes: normalizeMydata(action.data),
        loading: false
      };

    default:
      return state;
  }
};
function normalizeMydata(originalData) {
  const ingredient = new schema.Entity('ingredients_recipe');
  const recipe = new schema.Entity('recipes', {
    ingredients: [ingredient]
  })
  
  const recipeSchema = [recipe];

  return normalize(originalData, recipeSchema);
}
