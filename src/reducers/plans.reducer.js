import { plansConstants } from '../constants/plans.constants';
const defaultState = { plans: [], plan: {monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: []}, loading: true };

export default (state = defaultState, action) => {
  switch (action.type) {
    case plansConstants.PLANS_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      }

    case plansConstants.PLANS_GET_ALL_SUCCESS:
      return {
        ...state,
        plan: action.data[0].meals.reduce((acc,el) => {
          acc[el.weekday] = el.recipe;
          return acc
        }, {}),
        plans: action.data[0],
        loading: false
      }

    default:
      return state;
  }
}