import { plansConstants } from '../constants/plans.constants';
import * as schema from './schemas';

export const getAllPlans = () => ({
  type: plansConstants.PLANS_GET_ALL,
  api: { endpoint: '/plans/plan_id' },
  schema: schema.planSchema,
});
