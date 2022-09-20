// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { sortRecipes, filterByDiets } from '../../redux/actions';

import DietsCheckbox from '../dietsCheckbox'


import { FilterContainer, FilterForm } from "./styles";

export default function Filter() {

  // const {push, location} = useHistory()
  const dispatch = useDispatch()

  function handleSelect(e) {
    let option = e.target
    if(!option.value) return
    let {sort, sortDirection} = JSON.parse(option.value);
    dispatch(sortRecipes(sort, sortDirection))

    // let createLink = location.search.length < 1
    //   ? `?sort=${sort}&sortDirection=${sortDirection}`
    //   : `&sort=${sort}&sortDirection=${sortDirection}`
    // console.log(location.search.length < 1)
    // push(`${location.pathname}${createLink}`)
  }

  // useEffect(() => {
  //   if(location.search.includes('sort')) {
  //   let queryArr = location.search?.split('&');
  //   console.log(queryArr)
  //   let getSort = queryArr.find(el => el.includes('sort')).split('=').at(-1);
  //   let getSortDirection = queryArr.find(el => el.includes('sortDirection')).split('=').at(-1);
  //   dispatch(sortRecipes(getSort, getSortDirection))
  // }
  // },[location.pathname, location.search, dispatch])

  function handleDiets(values) {
    dispatch(filterByDiets(values))
  }


  return (
    <FilterContainer>
      <FilterForm >
        <label>
          Ordenar por:
          <select onChange={handleSelect} >
            <option></option>
            <option value={JSON.stringify({sort: 'name', sortDirection: 'ASC'}) } >Alfabetico A - Z</option>
            <option value={ JSON.stringify({sort: 'name', sortDirection: 'DESC'}) } >Alfabetico Z - A</option>
            <option value={ JSON.stringify({sort: 'healthScore', sortDirection: 'ASC'})} >HealthScore Asc </option>
            <option defaultValue={'true'} value={ JSON.stringify({sort: 'healthScore', sortDirection: 'DESC'}) } >HealthScore Desc</option>
          </select>
        </label>
        <DietsCheckbox cb={handleDiets} />
      </FilterForm>
    </FilterContainer>
  );
}
