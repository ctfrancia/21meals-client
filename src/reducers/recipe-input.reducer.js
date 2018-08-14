
const initialState = {
  name: '',
  ingredients: [],
  description: [],
};

export default (state = initialState, action) => {
  let newDescription = [...state.description];
  let newIngridients = [...state.ingredients];

  let newState = {
    ...state
  };
  switch (action.type) {
  case 'ADD_STEP':
    newDescription = [...newDescription, action.step];
    newState.description = [...newDescription];
    return newState;
  case 'REMOVE_STEP':
    newDescription.splice(action.index, 1);
    newState.description = [...newDescription];
    return newState;
  case 'ADD_INGREDIENT':
    newIngridients = [...newIngridients, action.ingredient];
    newState.ingredients = [...newIngridients];
    return newState;
  case 'REMOVE_INGREDIENT':
    newIngridients.splice(action.index, 1);
    newState.ingredients = [...newIngridients];
    return newState;
  case 'CHANGE_NAME':
    newState.name = action.name;
    return newState;
  default:
    return state;
  }
};
