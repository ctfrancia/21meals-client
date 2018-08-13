import { plansConstants } from '../constants/plans.constants';
const defaultState = { plans: [], loading: true };

export default (state = defaultState, action) => {
  switch (action.type) {
    case plansConstants.PLANS_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      }

    case plansConstants.PLANS_GET_ALL_SUCCESS:
      return {
        plans: action.data[0],
        loading: false
      }

    default:
      return state;
  }
}