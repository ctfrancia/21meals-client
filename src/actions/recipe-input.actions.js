export function addStep (step) {
  return {
    type: 'ADD_STEP',
    step,
  };
}

export function removeStep (index) {
  return {
    type: 'REMOVE_STEP',
    index,
  };
}

export function changeName (name) {
  return {
    type: 'CHANGE_NAME',
    name,
  };
}

export function addIngredient (ingredient) {
  return {
    type: 'ADD_INGREDIENT',
    ingredient,
  };
}

export function removeIngredient (index) {
  return {
    type: 'REMOVE_INGREDIENT',
    index,
  };
}

export function changeIngredientAmount (index, amount, measure) {
  return {
    type: 'CHANGE_INGREDIENT_AMOUNT',
    index,
    amount,
    measure,
  };
}
