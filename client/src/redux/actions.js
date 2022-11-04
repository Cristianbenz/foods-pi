import axios from "axios";

export const SET_LOADING = "SET_LOADING";
export const GET_RECIPES = "GET_RECIPES";
export const SET_PAGE = "SET_PAGE";
export const ORDER_BY = "ORDER_BY";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_DIETS = "FILTER_BY_RECIPE";
export const CHANGE_DIETS = "CHANGE_DIETS";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_DETAILS = "GET_DETAILS";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DIETS = "GET_DIETS";

const api = process.env.REACT_APP_API_BASE_URL;

export const setLoading = { type: SET_LOADING };

export function getRecipes(filter) {
  const { name, diets, page, sortType = "", sortDirection = "" } = filter;
  return async (dispatch) => {
    const queries = `?filter[name]=${name}&filter[diets]=${diets}&options[page]=${page}&options[sortType]=${sortType}&options[sortDirection]=${sortDirection}`;
    try {
      let recipes = await axios(api + `recipes${queries}`);
      dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
      const parseFilter = JSON.stringify(filter);
      window.sessionStorage.setItem("filter", parseFilter);
    } catch (error) {
      dispatch({
        type: GET_RECIPES,
        payload: [],
      });
      return Error(error.message);
    }
  };
}

export function setPage(value) {
  return { type: SET_PAGE, payload: value };
}

export function addRecipe(recipe) {
  return async () => {
    try {
      await axios.post(`${api}recipes`, recipe);
    } catch (error) {
      return Error(error.message);
    }
  };
}

export function getDetails(id) {
  return async (dispatch) => {
    try {
      let recipe = await axios(`${api}recipes/${id}`);
      dispatch({
        type: GET_DETAILS,
        payload: recipe.data,
      });
    } catch (error) {
      return Error(error.message);
    }
  };
}

export const clearDetails = { type: CLEAR_DETAILS };

export function getDiets() {
  return async (dispatch) => {
    try {
      let diets = await axios(`${api}diets`);
      dispatch({
        type: GET_DIETS,
        payload: diets.data,
      });
    } catch (error) {
      return Error(error.message);
    }
  };
}

export function sortRecipes(sort) {
  return {
    type: ORDER_BY,
    payload: sort,
  };
}

export function searchByName(value) {
  const resetDiets = JSON.stringify(new Array(12).fill(false));
  window.sessionStorage.setItem("selectedDiets", resetDiets);
  return {
    type: SEARCH_BY_NAME,
    payload: value,
  };
}

export function filterByDiets(diets) {
  const parsedDiets = diets.map((el) => el.toLowerCase());
  return {
    type: FILTER_BY_DIETS,
    payload: parsedDiets,
  };
}

export function changeDiets(arr) {
  const parseState = JSON.stringify(arr);
  window.sessionStorage.setItem("selectedDiets", parseState);
  return {
    type: CHANGE_DIETS,
    payload: arr,
  }
}

export const clearFilter = { type: CLEAR_FILTER };
