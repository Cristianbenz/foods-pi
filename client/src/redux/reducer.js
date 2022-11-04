import {
  SET_LOADING,
  GET_DETAILS,
  SET_PAGE,
  CLEAR_DETAILS,
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BY_NAME,
  ORDER_BY,
  FILTER_BY_DIETS,
  CLEAR_FILTER,
  CHANGE_DIETS,
} from "./actions";

const filter = window.sessionStorage.getItem('filter') ?
  JSON.parse(window.sessionStorage.getItem('filter')) : (
  {
    name: "",
    diets: [],
    page: 1,
    sortType: "",
    sortDirection: "",
  }
)

const savedDiets = window.sessionStorage.getItem('selectedDiets') ?
  JSON.parse(window.sessionStorage.getItem('selectedDiets')) :
  new Array(12).fill(false)

const initialState = {
  recipes: [],
  filter,
  savedDiets,
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
        recipes: payload,
        searching: false,
      };
    case SET_PAGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          page: payload,
        },
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        filter: {
          diets: [],
          page: 1,
          sortType: "",
          sortDirection: "",
          name: payload,
        },
        savedDiets: new Array(12).fill(false)
      };
    case ORDER_BY:
      return {
        ...state,
        filter: {
          ...state.filter,
          sortType: payload.sortType,
          sortDirection: payload.sortDirection,
        },
      };
    case FILTER_BY_DIETS:
      return {
        ...state,
        filter: {
          ...state.filter,
          diets: payload,
          page: 1,
        },
      };
    case CHANGE_DIETS:
      return {
        ...state,
        savedDiets: payload
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          diets: [],
        },
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
