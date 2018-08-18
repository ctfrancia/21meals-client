import { schema } from 'normalizr';

//Schema for allRecipes
export const ingredients_recipe = new schema.Entity('ingredients_recipe');
export const recipe = new schema.Entity('recipes', {
  ingredients: [ingredients_recipe]
});
export const recipeSchema = [recipe];

//Schema for allIngredients
export const ingredient = new schema.Entity('ingredients');
export const ingredientSchema = [ingredient];

//Schema for allPlans
export const meals_plan = new schema.Entity('meals_plan');
export const planSchema = new schema.Entity('plan', {
  meals: [meals_plan]
});

//Schema for measures
export const measure = new schema.Entity('measures');
export const measureSchema = [measure];

//Schema for measures
export const ingredientType = new schema.Entity('ingredientTypes');
export const ingredientTypesSchema = [ingredientType];
