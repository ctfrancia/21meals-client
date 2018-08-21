import { shoppingListConstants } from '../constants/shoppingList.constants';
import * as schema from './schemas';
import { authHeader } from '../helpers/auth.header';

const JWT = authHeader();


export const getAllShoppingList = () => ({
  type: shoppingListConstants.SHOPPING_LIST_GET_ALL,
  api: {
    headers: JWT,
    endpoint: '/shopping-list-items'
  },
  // schema: schema.ingredientSchema
});

export const checkItem = () => ({
  type: shoppingListConstants.CHECK_ITEM,
  api: {
    headers: JWT,
    endpoint: '/shopping-list-items'
  },
  // schema: schema.ingredientSchema
});