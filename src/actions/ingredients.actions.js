import { ingredientsConstants } from '../constants/ingredients.constants';
import * as schema from './schemas';

export const getAllIngredients = () => ({
  type: ingredientsConstants.INGREDIENTS_GET_ALL,
  api: {
    endpoint: '/ingredients'
  },
  schema: schema.ingredientSchema
});
