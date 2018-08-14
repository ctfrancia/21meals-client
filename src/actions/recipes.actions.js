import { recipesConstants } from '../constants/recipes.constants';

export const getAllRecipes = () => ({ type: recipesConstants.RECIPES_GET_ALL, api: { endpoint: '/recipes' } });