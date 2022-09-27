import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  sortRecipes,
  filterByDiets,
  clearFilter,
} from "../../redux/actions";

import DietsCheckbox from "../dietsCheckbox";

import { FilterContainer, FilterForm } from "./styles";

export default function Filter() {
  const recipes = useSelector(state => state.recipes)
  const [ order, setOrder ] = useState(JSON.stringify({ sort: "name", sortDirection: "ASC" }))
  const dispatch = useDispatch();

  useEffect(() => {
    const { sort, sortDirection } = JSON.parse(order);
    dispatch(sortRecipes(sort, sortDirection));
  }, [recipes, dispatch, order])

  function handleSelect(e) {
    const value = e.target.value
    setOrder(value)
  }

  function handleDiets(values) {
    const { sort, sortDirection } = JSON.parse(order);

    if (!values.length) {
      dispatch(clearFilter);
      return dispatch(sortRecipes(sort, sortDirection))
    }
    
    dispatch(setLoading);
    dispatch(filterByDiets(values));
    dispatch(sortRecipes(sort, sortDirection));
  }

  return (
    <FilterContainer>
      <FilterForm autoComplete="off">
        <label>
          Ordenar por:
          <select
            onChange={handleSelect}
            defaultValue={JSON.stringify({
              sort: "name",
              sortDirection: "ASC",
            })}
          >
            <option
              value={JSON.stringify({ sort: "name", sortDirection: "ASC" })}
            >
              Alfabetico A - Z
            </option>
            <option
              value={JSON.stringify({ sort: "name", sortDirection: "DESC" })}
            >
              Alfabetico Z - A
            </option>
            <option
              value={JSON.stringify({
                sort: "healthScore",
                sortDirection: "ASC",
              })}
            >
              HealthScore Asc
            </option>
            <option
              defaultValue={"true"}
              value={JSON.stringify({
                sort: "healthScore",
                sortDirection: "DESC",
              })}
            >
              HealthScore Desc
            </option>
          </select>
        </label>
        <DietsCheckbox cb={handleDiets} />
      </FilterForm>
    </FilterContainer>
  );
}
