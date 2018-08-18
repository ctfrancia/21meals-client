import { usersConstants } from '../constants/users.constants';

export const login = (data) => ({
  type: usersConstants.LOGIN_REQUEST,
  api: { 
    endpoint: '/sign-in',
    method: 'POST', 
    body: data
  },
});

export const logout = () => ({
  type: usersConstants.LOGOUT,
  
});

export const register = (data) => ({
  type: usersConstants.REGISTER,
  api: {
    endpoint: '/users',
    body: data,
    method: 'POST'
  },
});
