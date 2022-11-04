import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortRecipes,
  filterByDiets,
  clearFilter,
  changeDiets,
  getRecipes, 
  setLoading
} from "../../redux/actions";


import DietsCheckbox from "../dietsCheckbox";

import { FilterContainer, FilterForm, FilterButton, ModalBackdrop } from "./styles";



export default function Filter() {
  const {filter, savedDiets} = useSelector(state => state)
  const {sortType, sortDirection} = filter
  const [ sort, setSort ] = useState(JSON.stringify({sortType, sortDirection}))
  const [ show, setShow ] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading);
    dispatch(getRecipes(filter));
  }, [dispatch, filter]);

  function handleSelect(e) {
    const value = e.target.value
    setSort(value)
    dispatch(sortRecipes(JSON.parse(value)));
  }

  function handleDiets(values) {

    if (!values.length) {
      return dispatch(clearFilter);
    }
    
    dispatch(filterByDiets(values));
  }

  function setDiets(selected) {
    dispatch(changeDiets(selected))
  }

  return (
    <>
      <FilterButton onClick={() => setShow(prev => !prev)}>Filter</FilterButton>
      <ModalBackdrop active={show} onClick={() => setShow(false)} />
      <FilterContainer active={show}>
      <FilterForm>
        <label>
          Sort by:
          <select
            onChange={handleSelect}
            value={JSON.stringify({sortType, sortDirection})}
          >
            <option
              value={JSON.stringify({sortType: "", sortDirection: ""})}
            >
              None
            </option>
            <option
              value={JSON.stringify({ sortType: "name", sortDirection: "ASC" })}
            >
              Alphabetic A - Z
            </option>
            <option
              value={JSON.stringify({ sortType: "name", sortDirection: "DESC" })}
            >
              Alphabetic Z - A
            </option>
            <option
              value={JSON.stringify({ sortType: "healthScore",  sortDirection: "ASC", })}
            >
              HealthScore Asc
            </option>
            <option
              value={JSON.stringify({ sortType: "healthScore", sortDirection: "DESC", })}
            >
              HealthScore Desc
            </option>
          </select>
        </label>
      <DietsCheckbox cb={handleDiets} control={savedDiets} updateControl={setDiets} />
      </FilterForm>
    </FilterContainer>
    </>
  );
}
