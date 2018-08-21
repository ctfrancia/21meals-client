import { recipesConstants } from '../constants/recipes.constants';
import * as schema from './schemas';
import { authHeader } from '../helpers/auth.header';
const JWT = authHeader();

export const getAllRecipes = () => ({
  type: recipesConstants.RECIPES_GET_ALL,
  api: { headers: JWT,
    endpoint: '/recipes' },
  schema: schema.recipeSchema
});

export const postRecipe = data => ({
  type: recipesConstants.RECIPES_POST_NEW,
  api: {
    endpoint: '/recipes',
    body: data,
    headers: JWT,
    method: 'POST'
  },
  schema: schema.recipeSchema
});
