import { ingredientsConstants } from '../constants/ingredients.constants';
import * as schema from './schemas';

export const getAllIngredients = () => ({
  type: ingredientsConstants.INGREDIENTS_GET_ALL,
  api: {
    endpoint: '/ingredients'
  },
  schema: schema.ingredientSchema
});

export const getAllTypes = () => ({
  type: ingredientsConstants.TYPES_GET_ALL,
  api: {
    endpoint: '/ingredient-types'
  },
  schema: schema.ingredientTypesSchema
});

export const postIngredient = data => ({
  type: ingredientsConstants.INGREDIENTS_POST_NEW,
  api: {
    method: 'POST',
    endpoint: '/ingredients',
    body: data,
  },
  schema: schema.ingredientSchema
});
