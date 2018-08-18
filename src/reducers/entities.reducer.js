
const defaultState = {
  recipes: {},
  ingredients_recipe: {},
  allIngredients: {},
  ingredient_types: {},
  plan: {},
  meals_plan: {},
  measures: {},
};

export default (state = defaultState, action) => {
  
  if (!action.entities) return state;

  return {
    ...state,
    recipes: { ...state.recipes, ...action.entities.recipes },
    ingredients_recipe: {
      ...state.ingredients_recipe,
      ...action.entities.ingredients_recipe
    },
    ingredient_types: {
      ...state.ingredient_types,
      ...action.entities.ingredientTypes,

    },
    allIngredients: { ...state.allIngredients, ...action.entities.ingredients },
    plan: { ...state.plan, ...action.entities.plan },
    meals_plan: { ...state.meals_plan, ...action.entities.meals_plan },
    measures: { ...state.measures, ...action.entities.measures },

  };
};
