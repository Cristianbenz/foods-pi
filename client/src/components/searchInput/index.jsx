import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLoading, clearFilter, getRecipes, changeDiets } from '../../redux/actions';

import { Input } from "./styles";

export default function SearchInput() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  function onChange(e) {
    let value = e.target.value
    dispatch(setLoading)
    dispatch(clearFilter)
    dispatch(changeDiets(new Array(12).fill(false)))
    dispatch(getRecipes(value))
  }

  if (pathname === "/home")
    return (
      <Input type="text" placeholder="🍳" onChange={onChange} />
    );

  return null;
}
