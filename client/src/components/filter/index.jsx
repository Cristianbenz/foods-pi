import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortRecipes,
  filterByDiets,
  setPage,
  clearFilter,
  changeDiets
} from "../../redux/actions";

import DietsCheckbox from "../dietsCheckbox";

import { FilterContainer, FilterForm } from "./styles";

export default function Filter() {
  const recipes = useSelector(state => state.recipes)
  const sortType = useSelector(state => state.sortType)
  const selectedDiets = useSelector(state => state.selectedDiets)
  const [ order, setOrder ] = useState(sortType)
  const dispatch = useDispatch();

  useEffect(() => {
    const { sort, sortDirection } = JSON.parse(order);
    dispatch(sortRecipes(sort, sortDirection));
  }, [dispatch, order, recipes])

  function handleSelect(e) {
    const value = e.target.value
    setOrder(value)
  }

  function handleDiets(values) {
    const { sort, sortDirection } = JSON.parse(order);
    const saveSort = () => dispatch(sortRecipes(sort, sortDirection))


    if (!values.length) {
      dispatch(clearFilter);
      dispatch(setPage(1))
      return saveSort()
    }
    
    dispatch(filterByDiets(values));
    saveSort()
    dispatch(setPage(1))
  }

  function setDiets(selected) {
    dispatch(changeDiets(selected))
  }

  return (
    <FilterContainer>
      <FilterForm>
        <label>
          Ordenar por:
          <select
            onChange={handleSelect}
            defaultValue={sortType}
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
      <DietsCheckbox cb={handleDiets} control={selectedDiets} updateControl={setDiets} />
      </FilterForm>
    </FilterContainer>
  );
}
