import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setLoading,
  sortRecipes,
  filterByDiets,
  clearFilter,
} from "../../redux/actions";

import DietsCheckbox from "../dietsCheckbox";

import { FilterContainer, FilterForm } from "./styles";

export default function Filter() {
  const dispatch = useDispatch();
  const select = useRef();
  const { sort, sortDirection } = JSON.parse(select.current.value);

  function handleSelect() {
    dispatch(setLoading);
    dispatch(sortRecipes(sort, sortDirection));
  }

  function handleDiets(values) {
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
      <FilterForm>
        <label>
          Ordenar por:
          <select
            ref={select}
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
