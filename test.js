import { schema, normalize } from 'normalizr';


const meals = {
  id: 1,
  user_id: 1,
  name: 'Italian week',
  meals: [
    {
      id: 1,
      weekday: 'monday',
      meal_type: 'dinner',
      recipe_id: 1
    },
    {
      id: 7,
      weekday: 'sunday',
      meal_type: 'dinner',
      recipe: null
    }
  ]
};

export const meals_plan = new schema.Entity('meals_plan');
export const plan = new schema.Entity('plan', {
  meals: [meals_plan]
});

const mealio = normalize(meals, plan);

console.log(mealio);

mealio.entities //?
