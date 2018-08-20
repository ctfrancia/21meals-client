import { ingredientsConstants } from '../constants/ingredients.constants';
import * as schema from './schemas';
import { authHeader } from '../helpers/auth.header';

const JWT = authHeader();


export const getAllIngredients = () => ({
  type: ingredientsConstants.INGREDIENTS_GET_ALL,
  api: {
    headers: JWT,
    endpoint: '/ingredients'
  },
  schema: schema.ingredientSchema
});

export const getAllTypes = () => ({
  type: ingredientsConstants.TYPES_GET_ALL,
  api: { 
    headers: JWT,
    endpoint: '/ingredient-types' },
    schema: schema.ingredientTypesSchema
  });
  
  export const postIngredient = data => ({
    type: ingredientsConstants.INGREDIENTS_POST_NEW,
    api: {
      method: 'POST',
      endpoint: '/ingredients',
      headers: JWT,
    body: data
  },
  schema: schema.ingredientSchema
});
