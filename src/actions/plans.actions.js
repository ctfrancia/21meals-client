import { plansConstants } from '../constants/plans.constants';

export const getAll = () => ({
  type: plansConstants.PLANS_GET_ALL,
  api: {
    endpoint: '/plans'
  }
})