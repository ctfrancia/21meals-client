const initialState = {
  name: '',
  description: [],
  ingredients: [],
};

export default (state = initialState, action) => {
  let newDescription = [...state.description];
  let newIngredients = [...state.ingredients];

  switch (action.type) {
  case 'ADD_STEP':
    return {
      name: state.name,
      description: [...state.description, action.step],
      ingredients: state.ingredients,
    };
  case 'REMOVE_STEP':
    newDescription.splice(action.index, 1);
    return {
      name: state.name,
      description: [...newDescription],
      ingredients: state.ingredients,
    };
  case 'ADD_INGREDIENT':
    return {
      name: state.name,
      description: state.description,
      ingredients: [...state.ingredients, {
        name: action.ingredient,
        amount: '',
        measure: '',
      }],
    };
  case 'REMOVE_INGREDIENT':
    newIngredients.splice(action.index, 1);
    return {
      name: state.name,
      description: state.description,
      ingredients: [...newIngredients],
    };
  case 'CHANGE_NAME':
    return {
      name: action.name,
      description: state.description,
      ingredients: state.ingredients,
    };
  case 'CHANGE_INGREDIENT_AMOUNT':
    newIngredients[action.index] = {
      name: state.ingredients[action.index].name,
      amount: action.amount,
      measure: action.measure,
    };
    return {
      name: state.name,
      description: state.description,
      ingredients: [...newIngredients],
    };
  default:
    return state;
  }
};
