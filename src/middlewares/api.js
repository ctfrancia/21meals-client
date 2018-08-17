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
import { normalize } from 'normalizr';

const BASE_URL = 'https://private-anon-9d15778814-mealee.apiary-mock.com'; //CHANGE THIS TO SERVER URL

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
  fetch(`${BASE_URL}${endpoint}`, {
    method: method || 'GET',
    body,
    headers
  })
    .then(response => response.json())
    .then(data => {
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
