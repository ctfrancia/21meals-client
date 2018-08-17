
const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_DEFAULT_SLIDE':
    return action.slide;
  default:
    return state;
  }
};
