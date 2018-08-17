import { recipesConstants } from '../constants/recipes.constants';
import * as schema from './schemas'

export const getAllRecipes = () => ({
  type: recipesConstants.RECIPES_GET_ALL,
  api: { endpoint: '/recipes' },
  schema: schema.recipeSchema,
});
