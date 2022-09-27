import {
  SET_LOADING,
  GET_DETAILS,
  CLEAR_DETAILS,
  GET_RECIPES,
  GET_DIETS,
  ORDER_BY,
  FILTER_BY_DIETS,
  CLEAR_FILTER,
} from "./actions";

const initialState = {
  recipes: [],
  filter: [],
  details: {},
  diets: [],
  searching: true,
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        searching: true,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: [...payload],
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...payload],
        searching: false,
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
      let newOrder = !state.filter.length
        ? state.recipes.sort(dir)
        : state.filter.sort(dir);
      return {
        ...state,
        filter: [...newOrder]
      };
    case FILTER_BY_DIETS:
      const condition = (diet) => {
        const name = diet.name || diet
        return payload.includes(name.toLowerCase());
      };
      const search = state.recipes.filter((rcp) =>
        rcp.diets.some((diet) => condition(diet))
      );
      const result = !search.length ? [undefined] : search;
      return {
        ...state,
        filter: result,
        searching: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: [],
      };
    case GET_DETAILS:
      return {
        ...state,
        details: { ...payload },
        searching: false,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        details: {},
      };
    default:
      return { ...state };
  }
}
