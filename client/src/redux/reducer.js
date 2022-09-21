import {
  SET_LOADING,
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
  searching: true
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        searching: true
      }
    case GET_DIETS:
      return {
        ...state,
        diets: [...payload],
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...payload],
        searching: false
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
        searching: false
      };
    case FILTER_BY_DIETS:
      const condition = diet => payload.includes(diet);
      const search = state.recipes.filter(rcp => rcp.diets.some(diet => condition(diet)))
      return {
        ...state,
        recipes: [...search],
        searching: false
      }
    case GET_DETAILS:
      return {
        ...state,
        details: { ...payload },
        searching: false
      };
    default:
      return { ...state };
  }
}
