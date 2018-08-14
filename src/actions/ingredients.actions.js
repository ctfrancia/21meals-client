import { ingredientsConstants } from "../constants/ingredients.constants";

export const getAllIngredients = () => ({
  type: ingredientsConstants.INGREDIENTS_GET_ALL,
  api: {
    endpoint: "/ingredients"
  }
});
