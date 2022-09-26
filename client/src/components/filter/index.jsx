import { useState } from "react";
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
  const [ order, setOrder ] = useState(JSON.stringify({ sort: "name", sortDirection: "ASC" }))
  const dispatch = useDispatch();

  function handleSelect(e) {
    const value = e.target.value
    const { sort, sortDirection } = JSON.parse(value);
    setOrder(value)
    dispatch(setLoading);
    dispatch(sortRecipes(sort, sortDirection));
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
      <FilterForm>
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
