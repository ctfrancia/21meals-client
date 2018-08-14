import { ingredientsConstants } from "../constants/ingredients.constants";
import { normalize, schema } from "normalizr";

const defaultState = { ingredients: [], loading: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case ingredientsConstants.INGREDIENTS_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ingredientsConstants.INGREDIENTS_GET_ALL_SUCCESS:
      return normalizeMydata(action.data);

    default:
      return state;
  }
};
function normalizeMydata(originalData) {
  const ingredient = new schema.Entity("ingredients");
  const mySchema = [ingredient];
  return normalize(originalData, mySchema);
}
