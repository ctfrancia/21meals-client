import { plansConstants } from "../constants/plans.constants";
const defaultState = {
  plans: [],
  plan: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  shoppingList: [],
  loading: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case plansConstants.PLANS_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case plansConstants.PLANS_GET_ALL_SUCCESS:
      return {
        ...state,
        plan: action.data[0].meals.reduce((acc, el) => {
          acc[el.weekday] = el.recipe;
          return acc;
        }, {}),
        plans: action.data[0],
        loading: false,
        shoppingList: 
        action.data[0].meals
        //This reduce extracts all the ingredients from all the recipes in the plan
          .reduce((acc, el) => {
            if (el.recipe !== null) {
              el.recipe.ingredients.forEach(ingredient => acc.push(ingredient));
            }
            return acc;
          }, [])
          // this reduce splits all ingredients and adds up the quantitites
          .reduce((acc, el) => {
            if (!acc.hasOwnProperty(el.ingredient.name)) {
              acc[el.ingredient.name] = {
                amount: el.amount,
                measure: el.measure,
                type: el.ingredient.ingredient_type
              };
            } else {
              acc[el.ingredient.name] = {
                ...acc[el.ingredient.name],
                amount: el.amount + acc[el.ingredient.name].amount
              }
            }
            return acc;
          }, {})
          // Split them into types
          // .reduce((acc, el) => {
          
          // }, {})
      };

    default:
      return state;
  }
};
