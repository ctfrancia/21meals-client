import { ingredientsConstants } from "../constants/ingredients.constants";

export const getAll = () => ({
  type: ingredientsConstants.INGREDIENTS_GET_ALL,
  api: {
    endpoint: "/ingredients"
  }
});
