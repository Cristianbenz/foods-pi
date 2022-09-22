import { useDispatch } from "react-redux";
import {
  setLoading,
  sortRecipes,
  filterByDiets,
  clearFilter
} from "../../redux/actions";

import DietsCheckbox from "../dietsCheckbox";

import { FilterContainer, FilterForm } from "./styles";

export default function Filter() {
  const dispatch = useDispatch();

  function handleSelect(e) {
    let option = e.target;
    if (!option.value) return;
    let { sort, sortDirection } = JSON.parse(option.value);
    dispatch(setLoading);
    dispatch(sortRecipes(sort, sortDirection));
  }

  function handleDiets(values) {
    if (!values.length) {
      dispatch(clearFilter);
    } else {
      dispatch(setLoading);
      dispatch(filterByDiets(values));
    }
  }

  return (
    <FilterContainer>
      <FilterForm>
        <label>
          Ordenar por:
          <select onChange={handleSelect}>
            <option></option>
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
