import { plansConstants } from '../constants/plans.constants';
import * as schema from './schemas';
import { authHeader } from '../helpers/auth.header';
const autHeader = authHeader();

export const getAllPlans = (planId) => ({
  type: plansConstants.PLANS_GET_ALL,
  api: { headers: autHeader, endpoint: '/plans/'+planId },
  schema: schema.planSchema
});

export const changeMeal = (recipeId, mealId, planId) => ({
  type: plansConstants.CHANGE_MEAL,
  api: { headers: autHeader, 
    endpoint: '/plans/'+planId+'/meal', 
    method: 'PUT', body: {mealId: mealId, recipeId: recipeId}},
  schema: schema.planSchema
});
