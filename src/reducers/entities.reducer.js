const defaultState = {};

export default ((state = defaultState, action) => {
  if (!action.entities) return state;
  

  return {
    ...state,
    recipes: {...state.recipes, ...action.entities.recipes},
    ingredients_recipe: {...state.ingredients_recipe, ...action.entities.ingredients_recipe},
    allIngredients: { ...state.allIngredients, ...action.entities.ingredients}

  }
});

