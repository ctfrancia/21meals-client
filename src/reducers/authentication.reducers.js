import { usersConstants } from '../constants/users.constants';


const defaultState = {
  logging_in: false,
  logged_in: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case usersConstants.LOGIN_REQUEST:
      return {
        ...state,
        logging_in: true
      };
    case usersConstants.LOGIN_SUCCESS:
    localStorage.setItem('user', JSON.stringify(action.data))
      return {
        ...state,
        logging_in: false,
        logged_in: true,
        user: {
          userId: action.data.id,
          firstName: action.data.first_name,
          lastName: action.data.last_name
        }
      };
    case usersConstants.LOGIN_FAILURE:
      return {
        ...state,
        logging_in: false,
        logged_in: true
      };
    default:
      return state;
  }
};
