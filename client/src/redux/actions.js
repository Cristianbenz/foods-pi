import axios from "axios";

export const SET_LOADING = "SET_LOADING";
export const GET_RECIPES = "GET_RECIPES";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY_DIETS = "FILTER_BY_RECIPE";
export const CLEAR_FILTER = "CLEAR_FILTER"
export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_DETAILS = "GET_DETAILS";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DIETS = "GET_DIETS";

let api = "http://localhost:3001/";

export const setLoading = {type: SET_LOADING}

export function getRecipes(name) {
  let nameQuery = name ? name.toLowerCase() : "";
  return async (dispatch) => {
    try {
      let recipes = await axios(`${api}recipes?name=${nameQuery}`);
      dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function addRecipe(recipe) {
  return async () => {
    try {
      await axios.post(`${api}recipes`, recipe);
    } catch (error) {
      return error.message;
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
      return error.message;
    }
  };
}

export const clearDetails = {type: CLEAR_DETAILS}

export function getDiets() {
  return async (dispatch) => {
    try {
      let diets = await axios(`${api}diets`);
      dispatch({
        type: GET_DIETS,
        payload: diets.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function sortRecipes(sort, sortDirection) {
  return {
    type: ORDER_BY,
    payload: { sort, sortDirection },
  };
}

export function filterByDiets(diets) {
  const parsedDiets = diets.map(el => el.toLowerCase())
  return {
    type: FILTER_BY_DIETS,
    payload: [...parsedDiets],
  };
}

export const clearFilter = {type: CLEAR_FILTER}