import {
  GET_DETAILS,
  GET_RECIPES,
  GET_DIETS,
  ORDER_BY,
  FILTER_BY_DIETS,
} from "./actions";

const initialState = {
  recipes: [],
  details: {},
  diets: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DIETS:
      return {
        ...state,
        diets: [...payload],
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...payload],
      };
    case ORDER_BY:
      let dir =
        payload.sortDirection === "DESC"
          ? (a, b) => {
              if (a[payload.sort] < b[payload.sort]) return 1;
              if (a[payload.sort] > b[payload.sort]) return -1;
              return 0;
            }
          : (a, b) => {
              if (a[payload.sort] > b[payload.sort]) return 1;
              if (a[payload.sort] < b[payload.sort]) return -1;
              return 0;
            };
      let newOrder = state.recipes.sort(dir);
      return {
        ...state,
        recipes: [...newOrder],
      };
    case FILTER_BY_DIETS:
      const condition = diet => payload.includes(diet);
      const search = state.recipes.filter(rcp => rcp.diets.some(diet => condition(diet)))
      return {
        ...state,
        recipes: [...search]
      }
    case GET_DETAILS:
      return {
        ...state,
        details: { ...payload },
      };
    default:
      return { ...state };
  }
}
