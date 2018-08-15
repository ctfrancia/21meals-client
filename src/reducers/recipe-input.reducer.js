
const initialState = {
  name: '',
  ingredients: [],
  description: [],
};

export default (state = initialState, action) => {
  let newDescription = [...state.description];
  let newIngridients = [...state.ingredients];
  let changedIngredient = {};
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
    newIngridients = [...newIngridients, {
      name: action.ingredient,
      amount: '',
      measure: '',
    }];
    newState.ingredients = [...newIngridients];
    return newState;
  case 'REMOVE_INGREDIENT':
    newIngridients.splice(action.index, 1);
    newState.ingredients = [...newIngridients];
    return newState;
  case 'CHANGE_NAME':
    newState.name = action.name;
    return newState;
  case 'CHANGE_INGREDIENT_AMOUNT':
    changedIngredient = {...state.ingredients[action.index]};
    changedIngredient.amount = action.amount;
    changedIngredient.measure = action.measure;
    newIngridients[action.index] = changedIngredient;
    newState.ingredients = [...newIngridients];
    return newState;
  default:
    return state;
  }
};
