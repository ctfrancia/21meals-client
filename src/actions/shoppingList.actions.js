import { shoppingListConstants } from '../constants/shoppingList.constants';
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

export const checkItem = (id) => ({
  type: shoppingListConstants.CHECK_ITEM,
  api: {
    headers: JWT,
    method: 'PUT',
    endpoint: '/shopping-list-items',
    body: {
      itemId: id
    }
  },
  // schema: schema.ingredientSchema
});