import { schema } from 'normalizr';


export const ingredients_recipe = new schema.Entity('ingredients_recipe');
export const recipe = new schema.Entity('recipes', {
  ingredients: [ingredients_recipe]
})
export const recipeSchema = [recipe];

export const ingredient = new schema.Entity("ingredients");
export const ingredientSchema = [ingredient];