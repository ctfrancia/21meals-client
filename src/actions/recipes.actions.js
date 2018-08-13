import { recipesConstants } from '../constants/recipes.constants';

export const getAll = () => ({
  type: recipesConstants.RECIPES_GET_ALL,
  api: {
    endpoint: '/recipes'
  }
})