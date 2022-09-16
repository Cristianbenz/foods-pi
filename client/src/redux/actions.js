import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY = "FILTER_BY";
export const PAGINATION = "PAGINATION"
export const GET_DETAILS = "GET_DETAILS";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DIETS = "GET_DIETS";

let api = "http://localhost:3001/";

export function getRecipes() {
  return async (dispatch) => {
    try {
      let recipes = await axios(`${api}recipes`);
      dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
    } catch (error) {
      throw Error(error);
    }
  };
}

export function searchByName(name) {
  return async (dispatch) => {
    try {
      let recipes = await axios(`${api}recipes?name=${name.toLowerCase()}`);
      dispatch({
        type: SEARCH_BY_NAME,
        payload: recipes.data,
      });
    } catch (error) {
      throw Error(error);
    }
  };
}

export function addRecipe(recipe) {
  return async () => {
    try {
      await axios.post(`${api}recipes`, recipe);
    } catch (error) {
      throw Error(error);
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
      throw Error(error);
    }
  };
}

export function getDiets() {
  return async (dispatch) => {
    try {
      let diets = await axios(`${api}diets`);
      dispatch({
        type: GET_DIETS,
        payload: diets.data,
      });
    } catch (error) {
      throw Error(error)
    }
  };
}

export function sortRecipes(sort, sortDirection) {
  return{
    type: ORDER_BY,
    payload: {sort, sortDirection}
  }
}

export function filterRecipes(diets) {
  return {
    type: FILTER_BY,
    payload: [...diets]
  }
}

export function pagination(offset) {
  return {
    type: PAGINATION,
    payload: offset
  }
}