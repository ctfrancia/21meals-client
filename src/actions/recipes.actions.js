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

export const getSearchRecipes = (TitleKeyword) => ({
  type: recipesConstants.GLOBAL_RECIPES_GET_ALL,
  api: {
    endpoint: `${TitleKeyword}&api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196`
  },
  globalApiQuery: true,
});

export const getOneRecipe = (RecipeID) => ({
  type: recipesConstants.GLOBAL_RECIPES_GET_ONE,
  api: {
    endpoint: `${RecipeID}?api_key=Ifu76FTQAzDd6CpFyGgVK9Y8IJ7MW196`
  },
  globalApiQuery: true,
});

export const removeIngredientFromGlobal = (IngredientID) => ({
  type: 'REMOVE_INGREDIENT_FROM_RECIPE',
  IngredientID
});
