// ACTION EXAMPLE
//
// const action = {
//   type: '...'
//   api: {
//     endpoint:,
//     body:,
//     headers:,
//     …
//   }
// }
import { history } from '../helpers/history';

import { normalize } from 'normalizr';

const BASE_URL = 'http://localhost:3001'; //SERVER URL
const BIG_OVEN_SEARCH_URL =
  'http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw=';
const BIG_OVEN_RECIPE_URL = 'http://api2.bigoven.com/recipe/';
export default store => next => action => {
  if (!action.api) return next(action);
  const { endpoint, method } = action.api;
  let { body, headers } = action.api;

  const defaultHeaders = {};

  if (body) {
    body = JSON.stringify(body);
    defaultHeaders['Content-type'] = 'application/json';
  }

  headers = {
    ...defaultHeaders,
    ...headers
  };

  next({
    ...action,
    type: `${action.type}_REQUEST`
  });
  // console.log('fetch', BASE_URL + endpoint);
  fetch(
    `${
      action.globalApiQuery
        ? action.type === 'GLOBAL_RECIPES_GET_ALL'
          ? BIG_OVEN_SEARCH_URL
          : BIG_OVEN_RECIPE_URL
        : BASE_URL
    }${endpoint}`,
    {
      method: method || 'GET',
      body,
      headers
    }
  )
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        throw (data.errors)
      }
      if (action.schema) {
        store.dispatch({
          ...action,
          type: `${action.type}_SUCCESS`,
          api: undefined,
          ...normalize(data, action.schema)
        });
      } else {
        store.dispatch({
          ...action,
          type: `${action.type}_SUCCESS`,
          api: undefined,
          data
        });
        if (action.type === 'LOGIN') {
          history.push('/');
        } 
      }
    })
    .catch(error => {
      store.dispatch({
        ...action,
        type: `${action.type}_FAILURE`,
        api: undefined,
        error
      });
    });
};
