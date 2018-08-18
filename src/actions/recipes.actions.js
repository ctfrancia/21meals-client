import { recipesConstants } from '../constants/recipes.constants';
import * as schema from './schemas';

export const getAllRecipes = () => ({
  type: recipesConstants.RECIPES_GET_ALL,
  api: { endpoint: '/recipes' },
  schema: schema.recipeSchema
});

export const postRecipe = payload => ({
  type: recipesConstants.RECIPES_POST_NEW,
  api: {
    endpoint: '/recipes',
    body: payload,
    header: 'Content-Type: application/json',
    method: 'POST'
  },
  schema: schema.recipeSchema
});
