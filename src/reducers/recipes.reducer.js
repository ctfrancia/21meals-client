import { recipesConstants } from '../constants/recipes.constants';
<<<<<<< HEAD
import { normalize, schema, Schema } from 'normalizr';

=======
>>>>>>> 0b3320fbdeebb3028fb40893b8d3b0e3133b1f8b
const defaultState = { recipes: [], loading: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case recipesConstants.RECIPES_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
<<<<<<< HEAD
      };

    case recipesConstants.RECIPES_GET_ALL_SUCCESS:
      return {
        recipes: normalizeMydata(action.data),
        loading: false
      };
=======
      }

    case recipesConstants.RECIPES_GET_ALL_SUCCESS:
      return {
        recipes: action.data,
        loading: false
      }
>>>>>>> 0b3320fbdeebb3028fb40893b8d3b0e3133b1f8b

    default:
      return state;
  }
<<<<<<< HEAD
};
function normalizeMydata(originalData) {
  const ingredient = new schema.Entity('ingredients_recipe');
  const recipe = new schema.Entity('recipes', {
    ingredients: [ingredient]
  })
  
  const recipeSchema = [recipe];

  return normalize(originalData, recipeSchema);
}
=======
}
>>>>>>> 0b3320fbdeebb3028fb40893b8d3b0e3133b1f8b
