import { plansConstants } from '../constants/plans.constants';
import * as schema from './schemas';

export const getAllPlans = () => ({
  type: plansConstants.PLANS_GET_ALL,
  api: { endpoint: '/plans/plan_id' },
  schema: schema.planSchema
});

export const changeMeal = (recipeId, mealId, day, mealTime) => ({
  type: plansConstants.CHANGE_MEAL,
  entities: {
    meals_plan: {
      [mealId]: {
        id: mealId,
        weekday: day,
        meal_type: mealTime,
        recipe_id: recipeId
      }
    }
  }
});
